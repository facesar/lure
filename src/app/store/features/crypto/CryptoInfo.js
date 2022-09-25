import React, { useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorCrypto, getInfoCrypto, selectorLoadingCrypto, selectorErrCrypto } from './CryptoSlice';

const CryptoInfo = () => {

    const crypto = useSelector(selectorCrypto);
    const status = useSelector(selectorLoadingCrypto);
    const error = useSelector(selectorErrCrypto);
    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const ref = useRef(name);


    useEffect(() => {
      ref.current = name
    }, [name])

    const onChangeId = (e) => {
      setId(e.target.value)
    }

    const onChangeName = (e) => {
      setName(e.target.value);
    }

    useEffect(() => {
        if (status === 'idle') {
          dispatch(getInfoCrypto())
        }
    }, [status, dispatch])


    let content;
    let nams;

    let crypList;

    let coc;
        
    if (status === 'loading') {
      content = <span>loading ...</span>;
    } else if (status === 'succeded') {

      crypList = Object.keys(crypto.rates);

      let et = crypto.rates.eth.value;
      nams = crypto.rates[name];
      let  co = crypto.rates.eth;

      if (name.includes('x')) {
        coc = crypList.filter((wor) => wor.includes('x')).map((d, index) => {
          return (
            <p key={index}>{d}</p>
          )
        })
      } else if (name.includes('b')) {
        coc = crypList.filter((wor) => wor.includes('b')).map((d, index) => {
          return (
            <p key={index}>{d}</p>
          )
        })
      } else if (name.includes('t')) {
        coc = crypList.filter((wor) => wor.includes('t')).map((d, index) => {
          return (
            <p key={index}>{d}</p>
          )
        })
      }
      

      // coc = name.includes('t') ? crypList.filter((wor) => wor.includes('t')).map((d, index) => {
      //   return (
      //     <p key={index}>{d}</p>
      //   )
      // }) : null

      content = <span>{co.name} { !id == 0 ? et * id : et }</span>

    } else if (status === 'failed') {
      content = <span>{error.message}</span>;
    }

  return (
    <React.Fragment>
      <h1>crypto</h1>
      <input ref={ref} type="text" onChange={(e) => onChangeName(e)}/>
      <input ref={ref} type="text" placeholder='0' value={id} onChange={(e) => onChangeId(e)}/>
      <div>
        <p>
        {
          content
        }
        </p>
        <p>
        {
          nams ? <strong>{nams.name} {!id == 0 ? nams.value * id : nams.value} { nams.type }</strong> : null
        }
        </p>
      </div>
      <div>
        {
          coc
        }
      </div>
    </React.Fragment>
  )
}

export default CryptoInfo;
