import React from 'react';
import useReviews from '../../hooks/Reviews/useReviews';
import ReviewItems from '../ReviewItems/ReviewItems';

const Reviews = () => {
    const [reviews, ] = useReviews([])
    return (
        <div className='container mx-auto mt-20'>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <ReviewItems key={review.id} review={review}></ReviewItems>)
                }
            </div>
        </div>
    );
};

export default Reviews;