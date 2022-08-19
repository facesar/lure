import React, { useState } from 'react'

const Component_1 = ({value_1, change_value_1}) => {

    const [value1] = useState('on');

    const handleAction = () => {
      change_value_1(!value_1);
    }


  return (
    <React.Fragment>
        <p>{ value_1 ? 'off' : `${value1}`}</p>
        <button onClick={() => handleAction()}>component 1</button>
    </React.Fragment>
  )
}

export default Component_1
