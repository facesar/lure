import React, { Component } from "react"
import PropTypes from "prop-types";

import { DatasMenuTwo } from "./DataMenu";
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles((theme) => ({
  myTitle: {
    color: theme.bgGreen
  },
  icon: (props) => ({
    fill: props.fill,
    width: "4rem",
    height: "4rem",
  })
}));

const Svg = ({img, ...props}) => {
  const classes = useStyles(props)

  return (
    <React.Fragment>
      <svg className={classes.icon}>{img}</svg>
    </React.Fragment>
  )
}

const Title = ({title, ...props}) => {
  const classes = useStyles(props)
  return (
    <React.Fragment>
      <h1 className={classes.myTitle}>{title}</h1>
    </React.Fragment>
  )
}

export default class TestMenu extends Component {
  static propTypes = {
    fill: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.object
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Title title="menu"/>
        <ul>
          {
            DatasMenuTwo.map((data) => 
              <li key={data.id}>
                <span><Svg fill="red" img={data.img}/></span>
                {data.name}
                <span><svg>{data.Ellipse}</svg></span>
              </li>
            )
          }
        </ul>
      </React.Fragment>
    )
  }
}
