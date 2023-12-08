import React from 'react'
import classes from "./card.module.css"
import image from "../assets/mountain.jpg"
const Card5 = ({heading,title1,title2,data}) => {
  return (
    <div className={classes.container}>
         <div className={classes.card}>
        <div className={classes.lastBox}>
        <div>
            <img
            src={image}
            className={classes.lastImg}
            />
           </div>
           <div>
          
        <div className={classes.data} style={{textAlign:'left',marginTop:-10,color:'white',marginLeft:-30}}>lorenm Ipsom lorenm Ipsomlorenm </div>
        <div className={classes.data} style={{float:'left',marginTop:-20,marginLeft:-30}}>lorenm Ipsom lorenm Ipsom </div>
        <div className={classes.border}></div>
           </div>
           
           
        </div>
        <div className={classes.lastBox}>
        <div>
            <img
            src={image}
            className={classes.lastImg}
            />
           </div>
           <div>
          
        <div className={classes.data} style={{textAlign:'left',marginTop:-10,color:'white',marginLeft:-30}}>lorenm Ipsom lorenm Ipsomlorenm </div>
        <div className={classes.data} style={{float:'left',marginTop:-20,marginLeft:-30}}>lorenm Ipsom lorenm Ipsom </div>
        <div className={classes.border}></div>
           </div>
           
           
        </div>
        <div className={classes.lastBox}>
        <div>
            <img
            src={image}
            className={classes.lastImg}
            />
           </div>
           <div>
          
        <div className={classes.data} style={{textAlign:'left',marginTop:-10,color:'white',marginLeft:-30}}>lorenm Ipsom lorenm Ipsomlorenm </div>
        <div className={classes.data} style={{float:'left',marginTop:-20,marginLeft:-30}}>lorenm Ipsom lorenm Ipsom </div>
        <div className={classes.border}></div>
           </div>
           
           
        </div>
        <div className={classes.lastBox}>
        <div>
            <img
            src={image}
            className={classes.lastImg}
            />
           </div>
           <div>
          
        <div className={classes.data} style={{textAlign:'left',marginTop:-10,color:'white',marginLeft:-30}}>lorenm Ipsom lorenm Ipsomlorenm </div>
        <div className={classes.data} style={{float:'left',marginTop:-20,marginLeft:-30}}>lorenm Ipsom lorenm Ipsom </div>
        <div className={classes.border}></div>
           </div>
           
           
        </div>
        
        
    
        </div>
    </div>
  )
}

export default Card5