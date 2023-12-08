import React from 'react'
import classes from "./card.module.css"
const Card4= ({heading,title1,title2,data}) => {
  return (
    <div className={classes.container}>
         <div className={classes.card}>
        <div className={classes.card1Heading} style={{paddingTop:10}}>{heading}</div>
        <div className={classes.title1}>{title1}</div>
        {/* <div className={classes.title1}>{title2}</div> */}
        <div className={classes.data}>{data}</div>
        <div  className={classes.btnBox} style={{paddingTop:32}}>
            {/* <button className={classes.btn} >Lorem</button>
            <button className={classes.btn}>Ipsom</button> */}
        </div>
        </div>
    </div>
  )
}

export default Card4