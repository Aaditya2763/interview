import React from 'react'
import classes from "./card.module.css"
import image from "../assets/mountain.jpg"
const Card3 = ({heading,title1,title2,data}) => {
  return (
    <div className={classes.container}>
         <div className={classes.card3}>
        <div className={classes.imageBox}>
        <div>
            <h3 style={{color:'white'}}>Lorem Ipsum</h3>
        <div className={classes.data} style={{width:120,marginTop:-10,float:'left'}}>{data}</div>
        {/* <div className={classes.data} style={{textAlign:'center',marginTop:-20}}>lorenm Ipsom</div> */}
           </div>
           <div>
           <h3 style={{color:'white'}}>Lorem Ipsum</h3>
        <div className={classes.data} style={{width:120,marginTop:-10,float:'left'}}>{data}</div>
           </div>
        </div>
        
        <div className={classes.data}></div>
        <div  className={classes.btnBox}>
            {/* <button className={classes.btn}>Lorem</button>
            <button className={classes.btn}>Ipsom</button> */}
        </div>
        </div>
    </div>
  )
}

export default Card3