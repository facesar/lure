import React from 'react'

const Component_1 = ({value_1, change_value_1}) => {

  const handleAction = () => {
    change_value_1(!value_1);
  }

  return (
    <React.Fragment>
        <p>{ value_1 ? 'off' : 'on'}</p>
        <button onClick={() => handleAction()}>Button_1</button>
    </React.Fragment>
  )
}

export default Component_1
