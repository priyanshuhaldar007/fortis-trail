import React, { useState } from 'react'
import axios from '../../node_modules/axios/index';

export default function AddCategory() {
const [Category, setCategory] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
       axios.post(`https://fortisab.com/api/users/addCategory`,{categoryItem:Category})
       .then((res)=>{
           if(res.status=200){
               alert('Category Added Successfully')
           }
       })
      
       .catch((err)=>{console.log(err)})
      };
    return (
        <div>
        <form className="form" onSubmit={submitHandler} >
          <div>
            <h1>Create Category</h1>
          </div>
        
        
          <div>
            <label htmlFor="Category">Category</label>
            <input
            
              id="Category"
              placeholder="Enter Category"
              required
              
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </div>

         
         
          <div>
            <label />
            <button className="primary" type="submit">
             Add Category
            </button>
          </div>
          <div>
            <label />
           
          </div>
        </form>
      </div>
   
    )
}
