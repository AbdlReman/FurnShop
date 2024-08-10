// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";
// import Tab from "react-bootstrap/Tab";
// import Nav from "react-bootstrap/Nav";
// import { collection, getDocs, addDoc } from "firebase/firestore";
// import { db } from "../../firebase";

// const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc }) => {
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({
//     name: "",
//     email: "",
//     comment: ""
//   });

//   useEffect(() => {
//     // Fetch reviews from Firestore on mount
//     const fetchReviews = async () => {
//       const querySnapshot = await getDocs(collection(db, "reviews"));
//       const reviewsList = querySnapshot.docs.map(doc => doc.data());
//       setReviews(reviewsList);
//     };
//     fetchReviews();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview({ ...newReview, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled out
//     if (!newReview.name || !newReview.email || !newReview.comment) {
//       console.error("Missing fields in the review");
//       alert("Please fill out all fields.");
//       return;
//     }

//     try {
//       // Add new review to Firestore
//       await addDoc(collection(db, "reviews"), newReview);

//       // Add the new review to the state
//       setReviews([...reviews, newReview]);

//       // Reset the form fields
//       setNewReview({ name: "", email: "", comment: "" });
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   return (
//     <div className={clsx("description-review-area", spaceBottomClass)}>
//       <div className="container">
//         <div className="description-review-wrapper">
//           <Tab.Container defaultActiveKey="productDescription">
//             <Nav variant="pills" className="description-review-topbar">
//               <Nav.Item>
//                 <Nav.Link eventKey="additionalInfo">Additional Information</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="productDescription">Description</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="productReviews">Reviews ({reviews.length})</Nav.Link>
//               </Nav.Item>
//             </Nav>
//             <Tab.Content className="description-review-bottom">
//               <Tab.Pane eventKey="additionalInfo">
//                 <div className="product-anotherinfo-wrapper">
//                   <ul>
//                     <li><span>Weight</span> 400 g</li>
//                     <li><span>Dimensions</span> 10 x 10 x 15 cm</li>
//                     <li><span>Materials</span> 60% cotton, 40% polyester</li>
//                     <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
//                   </ul>
//                 </div>
//               </Tab.Pane>
//               <Tab.Pane eventKey="productDescription">
//                 {productFullDesc}
//               </Tab.Pane>
//               <Tab.Pane eventKey="productReviews">
//                 <div className="row">
//                   <div className="col-lg-7">
//                     <div className="review-wrapper">
//                       {reviews.map((review, index) => (
//                         <div key={index} className="single-review">
//                           <div className="review-content">
//                             <div className="review-top-wrap">
//                               <div className="review-left">
//                                 <div className="review-name">
//                                   <h4>{review.name}</h4>
//                                 </div>
//                                 <div className="review-rating">
                                 
                                   
//                                 <i  className="fa fa-star" />
//                                 <i  className="fa fa-star" />
//                                 <i  className="fa fa-star" />
//                                 <i  className="fa fa-star" />
                                 
                                 
//                                     <i  className="fa fa-star-o" />
                                  
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="review-bottom">
//                               <p>{review.comment}</p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="col-lg-5">
//                     <div className="ratting-form-wrapper pl-50">
//                       <h3>Add a Review</h3>
//                       <div className="ratting-form">
//                         <form onSubmit={handleSubmit}>
//                           <div className="row">
//                             <div className="col-md-6">
//                               <div className="rating-form-style mb-10">
//                                 <input
//                                   placeholder="Name"
//                                   type="text"
//                                   name="name"
//                                   value={newReview.name}
//                                   onChange={handleInputChange}
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-md-6">
//                               <div className="rating-form-style mb-10">
//                                 <input
//                                   placeholder="Email"
//                                   type="email"
//                                   name="email"
//                                   value={newReview.email}
//                                   onChange={handleInputChange}
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-md-12">
//                               <div className="rating-form-style form-submit">
//                                 <textarea
//                                   name="comment"
//                                   placeholder="Message"
//                                   value={newReview.comment}
//                                   onChange={handleInputChange}
//                                 />
//                                 <input type="submit" value="Submit" />
//                               </div>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Tab.Pane>
//             </Tab.Content>
//           </Tab.Container>
//         </div>
//       </div>
//     </div>
//   );
// };

// ProductDescriptionTab.propTypes = {
//   productFullDesc: PropTypes.string,
//   spaceBottomClass: PropTypes.string
// };

// export default ProductDescriptionTab;


import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import StarRating from "./StarRating"; // import the StarRating component

const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 0
  });

  useEffect(() => {
    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const reviewsList = querySnapshot.docs.map((doc) => doc.data());
      setReviews(reviewsList);
    };
    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newReview.name || !newReview.email || !newReview.comment || newReview.rating === 0) {
      alert("Please fill out all fields and select a rating.");
      return;
    }

    try {
      await addDoc(collection(db, "reviews"), newReview);
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", email: "", comment: "", rating: 0 });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className={clsx("description-review-area", spaceBottomClass)}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">Additional Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews ({reviews.length})</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li><span>Weight</span> 400 g</li>
                    <li><span>Dimensions</span> 10 x 10 x 15 cm</li>
                    <li><span>Materials</span> 60% cotton, 40% polyester</li>
                    <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {productFullDesc}
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      {reviews.map((review, index) => (
                        <div key={index} className="single-review">
                          <div className="review-content">
                            <div className="review-top-wrap">
                              <div className="review-left">
                                <div className="review-name">
                                  <h4>{review.name}</h4>
                                </div>
                                <div className="review-rating">
                                  {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`fa fa-star${i < review.rating ? "" : "-o"}`} />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="review-bottom">
                              <p>{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input
                                  placeholder="Name"
                                  type="text"
                                  name="name"
                                  value={newReview.name}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input
                                  placeholder="Email"
                                  type="email"
                                  name="email"
                                  value={newReview.email}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style mb-10">
                                <span>Rating:</span>
                                <StarRating
                                  rating={newReview.rating}
                                  setRating={handleRatingChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="comment"
                                  placeholder="Message"
                                  value={newReview.comment}
                                  onChange={handleInputChange}
                                />
                                <input type="submit" value="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;

