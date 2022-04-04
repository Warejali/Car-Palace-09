import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-center m-5 text-5xl py-10">OOPS! 4O4 the Page not be found </h2>
      <Link to="/" className="bg-slate-700 text-white p-3 mt-2">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
