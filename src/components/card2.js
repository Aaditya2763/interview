import React from 'react'
import classes from "./card.module.css"
import image from "../assets/mountain.jpg"
const Card2 = ({heading,title1,title2,data}) => {
  return (
    <div className={classes.container} >
         <div className={classes.card}>
        <div className={classes.imageBox}>
        <div style={{paddingRight:5}}>
            <img
            src={image}
            className={classes.image}
            />
        <div className={classes.data} style={{textAlign:'center',marginTop:-10}}>lorenm Ipsom</div>
        <div className={classes.data} style={{textAlign:'center',marginTop:-20}}>lorenm Ipsom</div>
           </div>
           <div>
            <img
            src={image}
            className={classes.image}
            />
        <div className={classes.data} style={{textAlign:'center',marginTop:-10}}>lorenm Ipsom</div>
        
           </div>
        </div>
        
        <div className={classes.data}></div>
        <div  className={classes.btnBox}>
            <button className={classes.btn}>Lorem</button>
            <button className={classes.btn}>Ipsom</button>
        </div>
        </div>
    </div>
  )
}

export default Card2