import React, { Component, useState } from "react";
/* start icons from the react-icons package */
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Stars.css";


export default function Stars() {
    
    const [number, setNumber] = useState(0); 
    const [hoverStar, setHoverStar] = useState(undefined); 

    const handleText = () => {
        switch(number) {
            case 0: 
                return 'Oof, that was not good.'; 
            case 1: 
                return 'Meh, did not like it.'; 
            case 2: 
                return 'Hmm, it was OK.'; 
            case 3: 
                return 'Liked it. Would recommend.'; 
            case 4: 
                return 'Awesome!'; 
            case 5: 
                return 'Loved it. Must watch!'; 
    
        }
    }

    return(
        <div>
           <h1>Rate and Review</h1>
           <h2>{handleText()}</h2>
           {Array(5)
                .fill()
                .map((_, index) => 
                    number >= index + 1 || hoverStar >= index + 1 ?(
                        <AiFillStar
                            onMouseOver={() => !number && setHoverStar(index + 1)}
                            onMouseLeave={() => setHoverStar(undefined)}
                            style={{color: "orange"}}
                            onClick={() => setNumber(index + 1)} />
                    ) : (
                        <AiOutlineStar
                            onMouseOver={() => !number && setHoverStar(index + 1)}
                            onMouseLeave={() => setHoverStar(undefined)}
                            style={{color: "orange"}}
                            onClick={() => setNumber(index + 1)} />
                 ) 
           )}
           <br></br>
           </div>

   );

}
  