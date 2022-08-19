import React from 'react'

const Component_2 = ({value_2, change_value_2}) => {

  const handleAction = () => {
    change_value_2(!value_2);
  }

  return (
    <React.Fragment>
        <p>{ value_2 ? 'off' : 'on'}</p>
        <button onClick={() => handleAction()}>Button_2</button>
    </React.Fragment>
  )
}

export default Component_2
