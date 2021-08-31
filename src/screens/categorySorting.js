import React, { useEffect, useState } from 'react'
import axios from '../../node_modules/axios/index';
import Product from '../components/Product';
import "../Assets/sass/style.scss";

export default function CategorySorting(props) {
    const productId = props.match.params.id;
    var [sproducts, setSproducts] = useState([])

    const gethAllcdata=()=>{
        axios.get(`https://fortisab.com/api/products`)
        .then((res)=>{
            res.data.forEach(e=>{
                if(e.category===productId){
                  setSproducts(oldArray => [...oldArray, {_id:e._id,brand:e.brand,
                  category:e.category,
                  countInStock:e.countInStock,
                  createdAt:e.createdAt,
                  description: e.description,
                  image: e.image,
                  name: e.name,
                  numReviews:e.numReviews,
                  price:e.price,
                  rating: e.rating}]);
                    console.log(sproducts,e,"skt")

                    sproducts = sproducts.filter (function (value, index, array) { 
                        return array.indexOf (value) === index;
                      
                    });

                }
            })


           
        }) 
    }
  

    // useEffect(() => {
    //    gethAllcdata()
        
    //    }, [])

       useEffect(() => {
          setSproducts([]);
          gethAllcdata()
         
        }, [productId])

      
    return (
        <div>
          
            <div className="row center ">
          {sproducts.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>

        </div>
    )
}
