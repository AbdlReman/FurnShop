import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogFeaturedSingle = ({ singlePost }) => {
  return (
    <div className="blog-wrap mb-30 scroll-zoom">
      <div className="blog-img">
      {/* <Link to={process.env.PUBLIC_URL + singlePost.url}> */}
        <Link to={process.env.PUBLIC_URL }>
          <img src={process.env.PUBLIC_URL + singlePost.image} alt="" />
        </Link>
        <div className="blog-category-names">
          {singlePost.category.map((singleCategory, key) => {
            return (
              <span className="purple" key={key}>
                {singleCategory}
              </span>
            );
          })}
        </div>
      </div>
      <div className="blog-content-wrap">
        <div className="blog-content text-center">
          <h3>
            <Link to={process.env.PUBLIC_URL }>
              {singlePost.title}
            </Link>
          </h3>
          <span>
            By{" "}
            <Link to={process.env.PUBLIC_URL }>
              {singlePost.author}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

BlogFeaturedSingle.propTypes = {
  singlePost: PropTypes.shape({})
};

export default BlogFeaturedSingle;
