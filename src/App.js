import "./App.css";
import { useState, useEffect } from "react";
import logo from "./img/ravenclaw.png";
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";
import axios from "axios";

function App() {
  const [reviews, setReviews] = useState([]);

  const getReviews = () => {
    axios.get("http://localhost:3000/reviews").then((res) => {
      setReviews(res.data);
    });
  };

  useEffect(() => {
    getReviews();
  }, [reviews]);

  return (
    <div className="App">
      <header className="App-header">
        <p
          style={{
            backgroundColor: "cornflowerblue",
            marginTop: 0,
            padding: "1rem",
          }}
        >
          This is a demo for building a CRUD MySQL Node.js App tutorial. Still
          in Progress. Tutorial will be available on lo-victoria.com
        </p>
        <img src={logo} style={{ width: "18rem" }} alt="" />
      </header>
      <div className="reviews">
        {reviews.map((item) => {
          return (
            <div className="review">
              <h3>Title: {item.book_title}</h3>
              <h3>Review: {item.book_review}</h3>
              <h3>Rating: {item.book_rating}</h3>
              <Edit id={item.id} reviews={reviews} setReviews={setReviews} />
              <Delete id={item.id} reviews={reviews} setReviews={setReviews} />
            </div>
          );
        })}
      </div>

      <Add reviews={reviews} setReviews={setReviews} />
    </div>
  );
}

export default App;
