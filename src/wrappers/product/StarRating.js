import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="single-review">
                          <div className="review-content">
                            <div className="review-top-wrap">
                              <div className="review-left">
    <div className="review-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <i
            key={index}
            className={`fa fa-star${starValue <= rating ? "" : "-o"}`}
            onClick={() => setRating(starValue)}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </div>
    </div>
    </div></div></div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired
};

export default StarRating;
