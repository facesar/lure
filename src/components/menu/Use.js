import React from 'react';
import Icons from "../../assets/img/icons.svg";

const Use = ({name}) => {
  return (
    <React.Fragment>
        <use href={Icons + `#${name}`}></use>
    </React.Fragment>
  )
}

export default Use;
