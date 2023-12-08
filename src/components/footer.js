import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import classes from "./footer.module.css"
import Card from './card';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './Card4';
import Card5 from './card5';
const Footer= () => {
  return (
    <div className={classes.container}>
       <div className={classes.dataBox}>
       <div className={classes.Box1}>
       
       <span cla><FaRegLightbulb/>Blog </span><FaGreaterThan style={{marginTop:8, marginLeft:-20,fontSize:12}}/>
           
            <span className={classes.circle}>Lorem</span>
            <span><FaRegLightbulb style={{color:'yellow'}} /></span>
    </div>
    
    <div className={classes.cardBox}>
    <Card
    heading="Lorem Ipsum" 
    title1="What is Lorem Ipsum" 
    title2="why do we use it"
    data="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...    There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    />
     <Card
    heading="Lorem Ipsum" 
    title1="What is Lorem Ipsum" 
    title2="why do we use it"
    data="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...    There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    />
     <Card2
    heading="Lorem Ipsum" 
    title1="What is Lorem Ipsum" 
    title2="why do we use it"
    data="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...    There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    />
    </div>
    <div className={classes.cardBox}>
       <Card3
           data="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...    There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
           />
      <Card4
      heading="Lorem Ipsum" 
      title1="What is Lorem Ipsum" 
      title2="why do we use it"
      data="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...    There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."/>
       <Card5/>
       </div>
       </div>
      
    </div>
  )
}

export default Footer
