import React from 'react'
import data from './data.json' 
import SportCard from './SportCard'
const Sport = () => {
  return (
      <div>
         {
        data.map((sport,index)=>{
            console.log(sport)
            return(
                <div key={index}>
                    <div>
                        {sport.data.map((sports,index)=>{
                            console.log(sports)
                            return(
                                <div key={index}>
                                <SportCard title={sports.sTitle} Description={sports.sDescription} sImage ={sports.sImage} nCommentsCount ={sports.nCommentsCount}
                                nViewCounts={sports.nViewCounts}  />
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        })
         }
      </div>
  )
}

export default Sport