import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import axios from "../../node_modules/axios/index";
import FacebookIcon from "../../node_modules/react-share/lib/FacebookIcon";
import LinkedinIcon from "../../node_modules/react-share/lib/LinkedinIcon";
import TelegramIcon from "../../node_modules/react-share/lib/TelegramIcon";
import TwitterIcon from "../../node_modules/react-share/lib/TwitterIcon";
import WhatsappIcon from "../../node_modules/react-share/lib/WhatsappIcon";
import Rating from "./Rating";

export default function CarouselCard(props) {
  const [isShareable, setIsShareble] = useState(false);
  const [isReport, setIsReport] = useState(false);
  const [biddingCount, setBiddingCount] = useState(0);
  const { product } = props;
  const checkBidding=()=>{
    axios .get('https://fortisab.com/api/users/bidding/')
    .then((res)=>{
     var i=0;
      res.data.forEach(e => {
      
      console.log(e.productId,product)
      if(e.productId==product._id){
      setBiddingCount(i+1)
      i=i+1
      }
    });})
  }
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  useEffect(() => {
   checkBidding()
  }, [product])
  return (
    <div key={product._id} className="card" >
      <div>
        <i
          style={{
            float: "right",
            margin: "10px",
            cursor: "pointer",
            color: "#808080",
          }}
          class="fa fa-ellipsis-h"
          aria-hidden="true"
          onClick={() => {setIsReport(!isReport)}}
        ></i>
        
        {isReport?<div  style={{
            
            margin: "10px",
            cursor: "pointer",
            color: "#808080",
            backgroundColor:'white',
            padding:'10px',
            margin:'10px',
            position:'absolute',
           width:'80px',
           borderRadius:'10px',
         
           boxShadow:'4px 1px 4px 1px #f0c040',
           marginLeft:'100px',
           marginTop:'40px'

          }} ><a style={{listStyle:'none',cursor:'pointer'}}  onClick={() => {
            setIsShareble(!isShareable);
          }}>Share</a> <a  style={{listStyle:'none'}}>Report</a></div>:null}
      
      </div>
      <Link to={`/product/${product._id}`}>
        <img
          onContextMenu={(e) => {
            e.preventDefault();
          }}
          className="medium"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        
        <div className="price" style={{display:'flex',justifyContent:'space-evenly',width:'100%'}}>
            <p style={{ fontSize: "13px" }}>{product.price} XMG</p>
            {product.AuctionEndTime?<> <p style={{ fontSize: "13px" }}>{biddingCount} Bids</p>
          
          <Link to={`/product/${product._id}`}>  <p style={{ fontSize: "13px" }}>Place Bid</p></Link></>:null}
           
          </div>
         
        <Rating
          rating={getRandomNum(10,20)}
          numReviews={getRandomNum(300,600)}
        ></Rating>
        <div className="row">
        
          {isShareable ? (
            <div style={{position:'absolute'}}>
              <TwitterShareButton
                size={32}
                url={`https://fortisab.com/product/${product._id}`}
                title={product.name}
               children={ <TwitterIcon size={32}  round={true} />}
              />
              <WhatsappShareButton  url={`https://fortisab.com/product/${product._id}`} title={product.name} children={ <WhatsappIcon size={32}   round={true} />}/>
              <LinkedinShareButton  url={`https://fortisab.com/product/${product._id}`} title={product.name} children={ <LinkedinIcon size={32}   round={true} />}/>
             
              <TelegramShareButton  url={`https://fortisab.com/product/${product._id}`} title={product.name} children={ <TelegramIcon size={32}   round={true} />}/>
             
             
             
              <FacebookShareButton url={`https://fortisab.com/product/${product._id}`} title={product.name} size={24} children={ <FacebookIcon size={32} round={true} />} />
            </div>
          ) : null}

        </div>
      </div>
    </div>
 
 );
}

