/* Review: A text review a user can leave on a movie. */ 

import React, { useState } from 'react'; 
import "./Stars"; 


export default function Review() {
    const [review, setReview] = useState(""); 
    const [reviews, setReviews] = useState(""); 

    const submitReview = (e) => {
        e.preventDefault(); 

        const newReview = {
            rating: Number, 
            description: review
        }

        setReviews([...reviews, newReview]); 

    }; 
    const deleteReview = (e) => {}; 

    return (
        <div>
            <textarea placeholder="What did you think about the movie? (optional)"></textarea>
                <br></br>
            <button onClick={e => submitReview(e)}>Submit</button>
            <button onClick={e => deleteReview(e)}>Delete</button>
        </div>
       
    );
}