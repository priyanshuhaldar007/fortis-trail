import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import Product from './Product';
import { Link } from 'react-router-dom';
export default function AuctionScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [AuctionPrice, setAuctionPrice] = useState(0);
  
  const [AuctionEndTime, setAuctionEndTime] = useState(0);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productUpdate = useSelector((state) => state.productUpdate);
  var [categoryList, setCategoryList] = useState([]);


  const fetchAlldata=()=>{
    axios.get(`https://fortisab.com/api/users/getCategory/art`)
    .then((res)=>{
   
     res.data.forEach(element => {
      if(element.categoryItem && !category.includes(element.categoryItem)){
     
      setCategoryList(oldArray => [...oldArray, element.categoryItem]);
   console.log(element.categoryItem,categoryList.length)
   categoryList = categoryList.filter (function (value, index, array) { 
    return array.indexOf (value) == index;
});
       }
      
     });
    })
  }

 

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setDescription(product.description);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        category,
        brand,
        countInStock,
        description,
        AuctionPrice,
        AuctionEndTime,
        ownerName
        
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [ownerName, setOwnerName] = useState(userInfo.name);
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  useEffect(() => {
    fetchAlldata()
    
   }, [])

  return (
    <div style={{display:'flex'}}>
        {console.log(product)}
      

        {/* <Product key={product._id} product={product}></Product> */}
        
      <form className="form" onSubmit={submitHandler}>
        <div>
     
          <h1>Create Auction for Product {productId}</h1>
        </div>
      
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
              <div>
              <label htmlFor="name">Owner Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={ownerName}
               disabled
              ></input>
            </div>
            <div>
              <label htmlFor="name">Product Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
               disabled
              ></input>
            </div>
            <div>
              <label htmlFor="name">Auction Price</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={AuctionPrice}
                onChange={(e) => setAuctionPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="name">Auction End Time</label>
           
              <select 
        onChange={(event) => setAuctionEndTime(event.target.value)}
        value={AuctionEndTime}
      >
         <option value={1} >{"1 Hour"}</option>
         <option value={2} >{"2 Hour"}</option>
         <option value={3} >{"3 Hour"}</option>
         <option value={4} >{"4 Hour"}</option>
         <option value={5} >{"5 Hour"}</option>
         <option value={24} >{"24 Hour"}</option>
         <option value={48} >{"48 Hour"}</option>
        

      </select>
            </div>
           
           
            <button className="primary" type="submit">
              Create Auction
              </button>
          </>
        )}
      </form>
    </div>
  );
}