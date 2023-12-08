import React, { Fragment } from 'react'
import classes from "./dashboard.module.css"
import image from "../assets/mountain.jpg"
const DashboardImage = () => {
  return (
    <Fragment className={classes.container} >
         <img src={image} alt="dashboard image" className={classes.containerImage} />
         <div className={classes.box}>
            <span>Lorem</span>
            <span className={classes.circle}></span>
            <span className={classes.circle}></span>
            <span className={classes.circle}></span>
            <span>Ipsum</span>
            

         </div>
    </Fragment>
  )
}

export default DashboardImage