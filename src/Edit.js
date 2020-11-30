import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Edit(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data["id"] = props.id;
    updateReview(data);
  };

  const updateReview = (data) => {
    axios.put("http://localhost:3000/reviews", data).then((res) => {
      props.setReviews(
        props.reviews.map((item) => {
          return item.id === props.id
            ? {
                id: item.id,
                book_title: item.book_title,
                book_review: item.book_review,
                book_rating: item.book_rating,
              }
            : item;
        })
      );
    });
  };

  return (
    <form className="add-review" onSubmit={handleSubmit(onSubmit)}>
      <h4>Edit Review</h4>
      <input
        type="text"
        placeholder="Review"
        name="book_review"
        ref={register({ required: true, maxLength: 450 })}
      />
      <input
        type="number"
        placeholder="Rating"
        name="book_rating"
        ref={register({ required: true, max: 5, min: 0 })}
      />

      <input id="btn" type="submit" />
    </form>
  );
}
