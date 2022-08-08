import React from 'react'
import './SportCard.css'
const SportCard = ({title,Description,sImage,nCommentsCount,nViewCounts}) => {


  return (
    <>
    <div className='card-l'>
    <div className='card'>
    <div className='Card2'>
    <img src={sImage} alt='img'></img>
    <div className='title'>
    <h3 className='h1'>{title}</h3>
    <h5 className='h2'>{Description}</h5>
    </div>
    </div>
     <div className='footer'>
   <div> <h4>SPORTS INFO</h4> <span>a year ago</span></div>
   <div className='footer-img'>
       <img src='https://www.sports.info/comment-icon.7aef209a3b2086028430.svg' alt='img'></img>{nCommentsCount}
       <img src='https://www.sports.info/view-icon.b16661e96527947b18f1.svg'  alt='img'></img>
          {nViewCounts}
       </div>
     </div>
     </div>
     </div>
    </>
  )
}

export default SportCard