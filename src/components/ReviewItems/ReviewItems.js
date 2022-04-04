import React from 'react';
import './ReviewItems.css'

const ReviewItems = (props) => {
    const { name, content, ratings, image } = props.review
    return (
        <div className="review-item bg-slate-200 flex justify-center items-center">
            <div className='p-10'>
                <div className="flex justify-center w-44 mx-auto">
                    <img className="rounded-full flex flex-col justify-center" src={image} alt="" />
                </div>
                <div className="">
                    <h4 className='text-2xl mt-5'>{name}</h4>
                    <p><i>{content}</i></p>
                    <small>
                    Ratings : <span>{ratings}</span>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;