import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import LandingCarousel from '../components/Carousel'
import LazyLoad from 'react-lazyload';
import AuctionCarousel from '../components/AuctionCarousel';
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  return (
    <div >
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <LazyLoad> <div >  <h1  className="glow hot-deal">Hot Deals <i class="fa fa-cart-plus" style={{color:'#1FA8F8',fontSize:'30px'}} aria-hidden="true"></i> </h1>
        <LandingCarousel data={products} />
        <h1  className="glow" >Live Auction <i class="fa fa-tint" style={{color:'orangeRed',fontSize:'30px'}} aria-hidden="true"></i> </h1>
       
        <AuctionCarousel data={products} />
        <h1 className="glow marketplace-title">Marketplace <i class="fa fa-shopping-bag " style={{color:'#DA2754',fontSize:'30px'}} aria-hidden="true"></i> </h1>
    
          <div className="row center Marketplace">
        
          {products.map((product) => (
         <LazyLoad>  <Product key={product._id} product={product}></Product></LazyLoad>
          ))}
        </div></div></LazyLoad>
       
      
      )}
    </div>
  );
}