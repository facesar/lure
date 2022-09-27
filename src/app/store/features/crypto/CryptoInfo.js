import React, { useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorCrypto, getInfoCrypto, selectorLoadingCrypto, selectorErrCrypto } from './CryptoSlice';

const CryptoInfo = () => {

  let content;
  let nams;
  let crypList;

  const crypto = useSelector(selectorCrypto);
  const status = useSelector(selectorLoadingCrypto);
  const error = useSelector(selectorErrCrypto);
  const dispatch = useDispatch();

  const [val, setVal] = useState('');
  const [name, setName] = useState('');

  const ref = useRef(name);


  useEffect(() => {
    ref.current = name
  }, [name])

  const onChangeVal = (e) => {
    setVal(e.target.value)
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getInfoCrypto())
    }
  }, [status, dispatch])


        
  if (status === 'loading') {
    content = <span>loading ...</span>;
  } else if (status === 'succeded') {
    crypList = Object.keys(crypto.rates);

    nams = crypto.rates[name];

    if (name.includes('x')) {
      content = crypList.filter((wor) => wor.includes('x')).map((d, index) => {
        return (
          <p key={index}>{d}</p>
        )
      })
    } else if (name.includes('b')) {
      content = crypList.filter((wor) => wor.includes('b')).map((d, index) => {
        return (
          <p key={index}>{d}</p>
        )
      })
    } else if (name.includes('t')) {
      content = crypList.filter((wor) => wor.includes('t')).map((d, index) => {
        return (
          <p key={index}>{d}</p>
        )
      })
    }
  } else if (status === 'failed') {
    content = <span>{error.message}</span>;
  }

  return (
    <React.Fragment>
      <h1>crypto</h1>
      <input ref={ref} type="text" onChange={(e) => onChangeName(e)}/>
      <input ref={ref} type="text" placeholder='0' value={val} onChange={(e) => onChangeVal(e)}/>
      <div>
        <div>
        {
          content
        }
        </div>
        <p>
        {
          nams ? <strong>{nams.name} {!val == 0 ? nams.value * val : nams.value} { nams.type }</strong> : null
        }
        </p>
      </div>
    </React.Fragment>
  )
}

export default CryptoInfo;
