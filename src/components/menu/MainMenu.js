import React, { Component } from "react";
import { DatasMenuTwo }  from "./DataMenu";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myTitle: {
    color: "red",
  },
  icon: (props) => ({
    fill: props.fill,
    width: "2.4rem",
    height: "2.4rem",
  }),
})

class Svg extends Component {
  constructor(props) {
    super(props);
    this.state = {click: false}
  };


  render() {
    const {img} = this.props;

    return (
      <React.Fragment>
        <svg className={classes.icon}>{img}</svg>
      </React.Fragment>
    )
  }
}

const MainMenu = ({...props}) => {
  const classes = useStyles(props);

  return (
    <React.Fragment>
      <h1 className={classes.myTitle}>Menu</h1>
      <ul>
        {
          DatasMenuTwo.map((data) => 
            <li key={data.id}>
              <span>
                <Svg fill="green" img={data.img}/></span>
                {data.name}
                <svg className="ellipse">{data.Ellipse}</svg>
              </li>
          )
        }
      </ul>
    </React.Fragment>
  )
}


export default MainMenu
