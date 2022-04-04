import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/Reviews/useReviews';
import car from '../../img/car.jpeg'
import ReviewItems from '../ReviewItems/ReviewItems';
import './Home.css'

const Home = () => {
    const [reviews] = useReviews();
    return (
        <div className='container mx-auto'>
            <div className='flex justify-around'>
                <div className='banner-text flex flex-col items-center justify-center'>
                    <h2 className='banner-heading text-4xl w-50'>Best Car and Auto</h2>
                    <h2 className='banner-heading text-4xl w-50'>Better experience with us</h2>
                    <p>Consumer Reports has tested cars for over 85 years. From researching and buying new or used cars to owning and maintaining them, our car experts are with you every step of the way.</p>
                    <button>Check details</button>
                </div>
                <div className='img-part w-50'>
                    <img src={car} alt="" />
                </div>
            </div>
            <div>
                <h2 className="text-3xl text-center mb-5">
                    Customer Reviews
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {reviews.slice(0, 3).map((review) => (
                        <ReviewItems key={review.id} review={review}></ReviewItems>
                    ))}
                </div>
                <div className='text-center my-20'>
                    <Link className=" bg-slate-700 text-white px-5 py-3 rounded-md" to="/reviews">
                        See All Reviews
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;