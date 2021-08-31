import React, { useState } from 'react';

export default function Rating(props) {
  const { rating, numReviews } = props;
  const [showlikes,setShowLikes]=useState('fa fa-heart-o')
  const [likeCount,setLikeCount]=useState(rating+400)
  return (
    <div className="rating">
      {/* <span>
        <i
          className={
            rating >= 1
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fa fa-star'
              : rating >= 1.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fa fa-star'
              : rating >= 2.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fa fa-star'
              : rating >= 3.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fa fa-star'
              : rating >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>fa-heart 
      </span> */}
      <span><i class={showlikes} style={{cursor:'pointer'}} aria-hidden="true" onClick={()=>{{showlikes=="fa fa-heart"?
      setLikeCount(rating+400):setLikeCount(rating+401)};{showlikes=="fa fa-heart"?
      setShowLikes('fa fa-heart-o'):setShowLikes('fa fa-heart')}}}>  </i> {likeCount } likes</span>
      <span> <i class="fa fa-eye" aria-hidden="true"> { rating+555 } views </i></span>
    </div>
  );
}