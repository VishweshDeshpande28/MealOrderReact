import React from 'react'
import { ModalBox } from '../ui/ModalBox';
import Banner from './Banner';
import { Category } from './category/Category';
import { Productitems } from "./product/Productitems";
const Home=(props)=>{
      return(
        <>
         <Banner/>   
         <Productitems/>
         <Category brandName={props.CategoryData}/>
        </>
      )
}
export default Home;