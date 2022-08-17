import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    title: {
        color: 'red',
        fontSize: '4rem',
    }
})

const Title = () => {

    const classes = useStyles();
  return (
    <React.Fragment>
        <h2 className={classes.title}>jss test</h2>
    </React.Fragment>
  )
}

export default Title
