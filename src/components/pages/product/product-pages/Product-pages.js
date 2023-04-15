import React,{useState} from 'react'
import { Route, useParams } from 'react-router-dom';

import { ProductList } from '../ProductList';

export const Productpages = (props) => {
    const Params = useParams();  
    const [productListItem,setproductListItem] = useState([
      {
          productName:'McDonald item 1', imgpath:'../../../assets/Product/macitem1.png', category:'burger', productaddedby:'McDonalds',price:85,maxAvailable:7,id:1 },
      {
         productName:'McDonald item 2', imgpath:'../../../assets/Product/macitem2.png', category:'burger', productaddedby:'McDonalds',price:185,maxAvailable:6,id:2
      },
      {
         productName:'McDonald item 3', imgpath:'../../../assets/Product/macitem3.png', category:'burger', productaddedby:'McDonalds',price:80,maxAvailable:3,id:3
      },
      {
         productName:'McDonald item 4', imgpath:'../../../assets/Product/macitem4.png', category:'burger', productaddedby:'McDonalds',price:185,maxAvailable:6,id:4
      },
      {
         productName:'KFC item 1', imgpath:'../../../assets/Product/kfcitem1.png', category:'wrap', productaddedby:'kfc',price:100,maxAvailable:5,id:5
      },
      {
         productName:'KFC item 2', imgpath:'../../../assets/Product/kfcitem2.png', category:'wrap', productaddedby:'kfc',price:210,maxAvailable:5,id:6
      },
      {
         productName:'KFC item 3', imgpath:'../../../assets/Product/kfcitem3.png', category:'wrap', productaddedby:'kfc',price:115,maxAvailable:5,id:7
      },
      {
         productName:'KFC item 4', imgpath:'../../../assets/Product/kfcitem4.png', category:'burger', productaddedby:'kfc',price:135,maxAvailable:5,id:8
      },
      {
          productName:'healthy-1', imgpath:'../../../assets/Product/healthy/option-1.png', category:'healthy', productaddedby:'healthy',price:105,maxAvailable:'10',id:9
       },
       {
          productName:'healthy-2', imgpath:'../../../assets/Product/healthy/option-2.png', category:'healthy', productaddedby:'healthy',price:115,maxAvailable:'15',id:10
       },
       {
          productName:'healthy-3', imgpath:'../../../assets/Product/healthy/option-3.png', category:'healthy', productaddedby:'healthy',price:125,maxAvailable:'50',id:11
       },
       {
         productName:'healthy-4', imgpath:'../../../assets/Product/healthy/option-3.png', category:'healthy', productaddedby:'healthy',price:125,maxAvailable:'50',id:11
      },
      {
         productName:'healthy-5', imgpath:'../../../assets/Product/healthy/option-3.png', category:'healthy', productaddedby:'healthy',price:125,maxAvailable:'50',id:11
      },
      {
         productName:'healthy-6', imgpath:'../../../assets/Product/healthy/option-3.png', category:'healthy', productaddedby:'healthy',price:125,maxAvailable:'50',id:11
      },
      {
         productName:'healthy-7', imgpath:'../../../assets/Product/healthy/option-3.png', category:'healthy', productaddedby:'healthy',price:125,maxAvailable:'50',id:11
      },
       {
          productName:'Pizza-1', imgpath:'../../../assets/Product/pizza/option-1.png', category:'pizza', productaddedby:'pizza',price:135,maxAvailable:5,id:12
       },
       {
          productName:'Pizza-2', imgpath:'../../../assets/Product/pizza/option-2.png', category:'pizza', productaddedby:'pizza',price:235,maxAvailable:5,id:13
       },
       {
          productName:'Pizza-3', imgpath:'../../../assets/Product/pizza/option-3.png', category:'pizza', productaddedby:'pizza',price:335,maxAvailable:5,id:14
       },
       {
          productName:'Pizza - 4', imgpath:'../../../assets/Product/pizza/option-4.png', category:'pizza', productaddedby:'pizza',price:180,maxAvailable:5,id:15
       },
       {
          productName:'Pizza - 5', imgpath:'../../../assets/Product/pizza/option-5.png', category:'pizza', productaddedby:'pizza',price:155,maxAvailable:5,id:16
       },
       {
          productName:'Pizza - 6', imgpath:'../../../assets/Product/pizza/option-6.png', category:'pizza', productaddedby:'pizza',price:100,maxAvailable:5,id:17
       },
       {
          productName:'Pizza - 7', imgpath:'../../../assets/Product/pizza/option-7.png', category:'pizza', productaddedby:'pizza',price:90,maxAvailable:5,id:18
       },
       {
          productName:'Pizza - 8', imgpath:'../../../assets/Product/pizza/option-8.png', category:'pizza', productaddedby:'pizza',price:105,maxAvailable:5,id:19
       },
       {
          productName:'chaat - 1', imgpath:'../../../assets/Product/chaat/option-1.png', category:'chaat', productaddedby:'chaat',price:40,maxAvailable:5,id:20
       },
       {
          productName:'chaat - 2', imgpath:'../../../assets/Product/chaat/option-2.png', category:'chaat', productaddedby:'chaat',price:50,maxAvailable:5,id:21
       },
       {
          productName:'chaat - 3', imgpath:'../../../assets/Product/chaat/option-3.png', category:'chaat', productaddedby:'chaat',price:70,maxAvailable:5,id:22
       },
       {
         productName:'chaat - 4', imgpath:'../../../assets/Product/chaat/option-3.png', category:'chaat', productaddedby:'chaat',price:70,maxAvailable:5,id:22
      },
      {
         productName:'chaat - 5', imgpath:'../../../assets/Product/chaat/option-3.png', category:'chaat', productaddedby:'chaat',price:70,maxAvailable:5,id:22
      },
      {
         productName:'chaat - 6', imgpath:'../../../assets/Product/chaat/option-3.png', category:'chaat', productaddedby:'chaat',price:70,maxAvailable:5,id:22
      },
      {
         productName:'sandwich-1', imgpath:'../../../assets/Product/chaat/option-3.png', category:'sandwich', productaddedby:'sandwich',price:70,maxAvailable:5,id:22
      },
      {
         productName:'sandwich-2', imgpath:'../../../assets/Product/chaat/option-3.png', category:'sandwich', productaddedby:'sandwich',price:70,maxAvailable:5,id:22
      },
      {
         productName:'sandwich-3', imgpath:'../../../assets/Product/chaat/option-3.png', category:'sandwich', productaddedby:'sandwich',price:70,maxAvailable:5,id:22
      },
      {
         productName:'sandwich-4', imgpath:'../../../assets/Product/chaat/option-3.png', category:'sandwich', productaddedby:'sandwich',price:70,maxAvailable:5,id:22
      },
      {
         productName:'sandwich-5', imgpath:'../../../assets/Product/chaat/option-3.png', category:'sandwich', productaddedby:'sandwich',price:70,maxAvailable:5,id:22
      },
      {
         productName:'sandwich-6', imgpath:'../../../assets/Product/chaat/option-3.png', category:'sandwich', productaddedby:'sandwich',price:70,maxAvailable:5,id:22
      },
       {
          productName:'biryani - 1', imgpath:'../../../assets/Product/biryani/option-1.png', category:'biryani', productaddedby:'biryani',price:170,maxAvailable:5,id:23
       },
       {
          productName:'biryani - 2', imgpath:'../../../assets/Product/biryani/option-2.png', category:'biryani', productaddedby:'biryani',price:100,maxAvailable:5,id:24
       },
       {
          productName:'biryani - 3', imgpath:'../../../assets/Product/biryani/option-3.png', category:'biryani', productaddedby:'biryani',price:170,maxAvailable:5,id:25
       },
       {
          productName:'biryani - 4', imgpath:'../../../assets/Product/biryani/option-4.png', category:'biryani', productaddedby:'biryani',price:570,maxAvailable:5,id:26
       },
       {
          productName:'biryani - 5', imgpath:'../../../assets/Product/biryani/option-5.png', category:'biryani', productaddedby:'biryani',price:270,maxAvailable:5,id:27
       },
       {
          productName:'biryani - 6', imgpath:'../../../assets/Product/biryani/option-6.png', category:'biryani', productaddedby:'biryani',price:270,maxAvailable:5,id:28
       },
       {
          productName:'biryani - 7', imgpath:'../../../assets/Product/biryani/option-7.png', category:'biryani', productaddedby:'biryani',price:270,maxAvailable:5,id:29
       },
       {
          productName:'biryani - 8', imgpath:'../../../assets/Product/biryani/option-8.png', category:'biryani', productaddedby:'biryani',price:270,maxAvailable:5,id:30
       },
       {
          productName:'biryani - 9', imgpath:'../../../assets/Product/biryani/option-9.png', category:'biryani', productaddedby:'biryani',price:270,maxAvailable:5,id:31
       },
       {
         productName:'cake - 1', imgpath:'../../../assets/Product/cakes/cake1.webp', category:'cake', productaddedby:'cake',price:250,maxAvailable:5,id:32
      },
      {
         productName:'cake - 2', imgpath:'../../../assets/Product/cakes/cake2.webp', category:'cake', productaddedby:'cake',price:220,maxAvailable:5,id:33
      },
      {
         productName:'cake - 3', imgpath:'../../../assets/Product/cakes/cake3.webp', category:'cake', productaddedby:'cake',price:290,maxAvailable:5,id:34
      },
      {
         productName:'cake - 4', imgpath:'../../../assets/Product/cakes/cake4.webp', category:'cake', productaddedby:'cake',price:270,maxAvailable:5,id:35
      },
      {
         productName:'cake - 5', imgpath:'../../../assets/Product/cakes/cake5.webp', category:'cake', productaddedby:'cake',price:180,maxAvailable:5,id:34
      },
      {
         productName:'homestyle-1', imgpath:'../../../assets/Product/healthy/healthy5.jpg', category:'homestyle', productaddedby:'homestyle',price:180,maxAvailable:5,id:34
      },
      {
         productName:'homestyle-2', imgpath:'../../../assets/Product/healthy/healthy3.jpg', category:'homestyle', productaddedby:'homestyle',price:180,maxAvailable:5,id:34
      },
      {
         productName:'homestyle-3', imgpath:'../../../assets/Product/healthy/healthy2.jpg', category:'homestyle', productaddedby:'homestyle',price:180,maxAvailable:5,id:34
      },
      {
         productName:'homestyle-4', imgpath:'../../../assets/Product/healthy/healthy1.jpg', category:'homestyle', productaddedby:'homestyle',price:180,maxAvailable:5,id:34
      },
      {
         productName:'homestyle-5', imgpath:'../../../assets/Product/healthy/healthy4.jpg', category:'homestyle', productaddedby:'homestyle',price:180,maxAvailable:5,id:34
      },
      {
         productName:'homestyle-6', imgpath:'../../../assets/Product/healthy/healthy6.jpg', category:'homestyle', productaddedby:'homestyle',price:180,maxAvailable:5,id:34
      },
      {
         productName:'desserts-1', imgpath:'../../../assets/Product/healthy/healthy6.jpg', category:'desserts', productaddedby:'desserts',price:180,maxAvailable:5,id:34
      },
      {
         productName:'desserts-2', imgpath:'../../../assets/Product/healthy/healthy6.jpg', category:'desserts', productaddedby:'desserts',price:180,maxAvailable:5,id:34
      },
      {
         productName:'desserts-3', imgpath:'../../../assets/Product/healthy/healthy6.jpg', category:'desserts', productaddedby:'desserts',price:180,maxAvailable:5,id:34
      },
      {
         productName:'desserts-4', imgpath:'../../../assets/Product/healthy/healthy6.jpg', category:'desserts', productaddedby:'desserts',price:180,maxAvailable:5,id:34
      },
      {
         productName:'desserts-5', imgpath:'../../../assets/Product/healthy/healthy6.jpg', category:'desserts', productaddedby:'desserts',price:180,maxAvailable:5,id:34
      },
   ]);
    const checkListAvailable = false;
   const mealsList = productListItem.map((listItem,index) => (
    listItem.category == Params.productId && <ProductList 
      pagefilter={Params.productId}  key={listItem.id} id={listItem.id}
      productName={listItem.productName} price={listItem.price} imgpath={listItem.imgpath}
       maxAvailable={listItem.maxAvailable}
    /> 
  ));
  console.log(mealsList)
  return (   
    <div className='container'>
        <div className='col-12'>
            <h1 className='pt-4 text-capitalize'>All Restaurants Delivering {Params.productId}</h1>
        </div>       
        <Route path={`/Productpages/${Params.productId}`}>  
          <div className='container product-list-block h-100 d-flex justify-content-center align-content-center pt-4'>
            {mealsList}
              {/* {mealsList != "" ? "true": "false"} */}
              {/* {mealsList == " " ? <p>currently providers not Found</p> : mealsList} */}
             
          </div>
        </Route>
    </div>    
   
  )
}
