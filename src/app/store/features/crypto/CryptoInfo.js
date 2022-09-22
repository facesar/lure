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
        
    if (status === 'loading') {
      content = <span>loading ...</span>;
    } else if (status === 'succeded') {
      let et = crypto.rates.eth.value;
      nams = crypto.rates[name];
      let  co = crypto.rates.eth
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
    </React.Fragment>
  )
}

export default CryptoInfo;
