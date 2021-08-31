import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from '../../node_modules/axios/index';

export default function ProductScreen(props) {
const dispatch = useDispatch()
const productId = props.match.params.id;
const [qty, setQty] = useState(1)
const [bidPrice, setBidPrice] = useState(0)

const productDetails = useSelector((state) => state.productDetails)
const { loading, error, product } = productDetails;
  

const userSignin = useSelector((state) => state.userSignin);
const { userInfo } = userSignin;
const [biddingCount, setBiddingCount] = useState(0);
const checkBidding=()=>{
  axios .get('https://fortisab.com/api/users/bidding/')
  .then((res)=>{
   var i=0;
    res.data.forEach(e => {
    
    console.log(e.productId,product)
    if(e?.productId===product?._id){
    setBiddingCount(i+1)
    i=i+1
    }
  });})
}
useEffect(() => {
  dispatch(detailsProduct(productId));
  checkBidding()
}, [dispatch, productId])
const addToCartHandler = () => {
  props.history.push(`/cart/${productId}?qty=${qty}`);
};

const placeBid=(product)=>{
  if(userInfo){
    product.price=parseInt(bidPrice)
   let price =parseInt(bidPrice);
   console.log(price,typeof(price))
    axios .post(`https://fortisab.com/api/users/bidding`,{
      name: userInfo.name,
      email:userInfo.email,
      userId: userInfo._id ,
      biddingPrice:price,
      productId:productId,
     })
     .then((res)=>{alert('successfully posted the bid')})
     .catch((err)=>{console.log(err)})
  }else{alert('Please Login to make a bid')}
  

  
console.log(product._id,productId)
}
  return (
    <div  onContextMenu={(e) => {
      e.preventDefault();
    }}>
    {loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
    <Link to="/">Back to Marketplace</Link>
    <div className="row top">
      <div className="col-2" >
        <Link to={`/product/${product._id}`}> <img onContextMenu={(e)=>{e.preventDefault()}} className="large" 
         src={product.image}
         alt={product.name}></img></Link>
       
      </div>
      <div className="col-1">
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          {/* <li>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
          </li> */}
          <li><p style={{fontSize:'13px'}}>Price :{product.price} XMG</p></li>
          <li>
            Description:
            <p>{product.description}</p>
          </li>
          {product.AuctionEndTime? <li>
          
            <p>  Total Bids: {biddingCount}</p>
          </li>:null}
        </ul>
      </div>
     
      {product.AuctionEndTime? <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
            <div className="row">
             
             <div>Owner</div>
             <div className="price"><p style={{fontSize:'13px'}}>{product.ownerName}</p></div>
           </div>

              <div className="row">
             
                <div>Auction Price</div>
                <div className="price"><p style={{fontSize:'13px'}}>{product.AuctionPrice} XMG</p></div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Status</div>
                <div>
                <span className="success">Auction Live</span>
                </div>
              </div>
            </li>
            {
              product.countInStock > 0 && (
               <>
               <li>
                 <div className= "row">
                   {/* <div>Qty</div>
                   <option value={1}>{1}</option> */}
                   {/* <select value ={qty} onChange={e => setQty(e.target.value)}>
                     {
                       [...Array(product.countInStock).keys()].map( x => (
                         <option key={x + 1} value={x + 1}>{x + 1}</option>
                       )
                       )}
                   </select> */}
                  
                    <label htmlFor="OfferPrice">Offer Price</label>
                    <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    <p style={{fontSize:'13px'}}>{bidPrice} XMG</p>
                       <input style={{width:'40px',maxHeight:'5px',marginLeft:'5px'}}
            
              id="OfferPrice"
              placeholder="Offer Price"
              required
              value={bidPrice}
              
             onChange={(e) => setBidPrice(e.target.value)}
            
            ></input>
            
                    </div>
           
                 </div>
               
                 <div>
           
          </div>

               </li>
                <li>
              <button onClick={()=>{placeBid(product)}} className="primary block">Place Bid</button>
            </li>
               </> 
                
              )
            }
            
           
          </ul>
        </div>
      </div>
    : <div className="col-1">
    <div className="card card-body">
      <ul>
        <li>
          <div className="row">
            <div>Price</div>
            <div className="price"><p style={{fontSize:'13px'}}>{product.price} XMG</p></div>
          </div>
        </li>
        <li>
          <div className="row">
            <div>Status</div>
            <div>
              {product.countInStock > 0 ? (
                <span className="success">In Stock</span>
              ) : (
                <span className="danger">Unavailable</span>
              )}
            </div>
          </div>
        </li>
        {
          product.countInStock > 0 && (
           <>
           <li>
             <div className= "row">
               <div>Qty</div>
               <option value={1}>{1}</option>
               {/* <select value ={qty} onChange={e => setQty(e.target.value)}>
                 {
                   [...Array(product.countInStock).keys()].map( x => (
                     <option key={x + 1} value={x + 1}>{x + 1}</option>
                   )
                   )}
               </select> */}
             </div>
           </li>
            <li>
          <button onClick={()=>{addToCartHandler();setQty(1)}} className="primary block">Add to Cart</button>
        </li>
           </> 
            
          )
        }
        
       
      </ul>
    </div>
  </div>
}
     
    </div>
  </div>
  )}
</div>
    
  );
}