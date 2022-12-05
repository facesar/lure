import React, { Component } from "react"
import PropTypes from "prop-types";

import { DatasMenuTwo } from "./DataMenu";
import { createUseStyles } from "react-jss";

import useMedia from "../subcomponents/useMedia";


const useStyles = createUseStyles((theme) => ({
  myTitle: (props) => ({
    color: props.click ? theme.bgDialy : theme.bgGreen
  }),
  icon: (props) => ({
    fill: props.fill,
    width: "4rem",
    height: "4rem",
  })
}));

const Svg = ({img, changeFill, ...props}) => {
  const classes = useStyles(props)

  return (
    <React.Fragment>
      <svg onClick={() => changeFill()} className={classes.icon}>{img}</svg>
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
    img: PropTypes.object,
    click: PropTypes.bool,
    fillChange: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      uname: false,
      fill: 0,
      click: false,
    }
    this.changeName = this.changeName.bind(this);
    this.changeFillSvg = this.changeFillSvg.bind(this);
  }

  changeName() {
    this.setState((prev) =>{
      return {
        uname: prev.uname = !prev.uname,
        click: prev.click = !prev.click,
      }
    })
  }

  changeFillSvg(fil) {
    this.setState((prev) => {
      return {
        fill: prev.fill = fil,
      }
    })
  }


  render() {
    const {uname, fill, click} = this.state;
    
    return (
      <React.Fragment>
        <Title click={click} title="menu"/>
        <p>{uname ? "violet" : "green"}</p>
        <button onClick={() => this.changeName()}>change name toggle</button>
        
        <ul>
          {
            DatasMenuTwo.map((data) => 
              <li key={data.id}>
                <span><Svg changeFill={() => this.changeFillSvg(data.id)} fill={fill === data.id ? "green" : "red"} img={data.img}/></span>
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
