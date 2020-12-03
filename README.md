<img src="https://github.com/victoria-lo/raven-books/blob/master/src/img/ravenclaw.png?raw=true" width="300" />

## About This Project
This is a demo app to showcase how to build a React Express MySQL CRUD app and deploy it to Heroku.

The project can be found at https://ravenbooks.herokuapp.com

> Tutorial COMING SOON to lo-victoria.com

### Book Review Table 📖
| Column | Properties| Description
|:------- |:---------------|:--------------
| id   | Primary Key, Auto Increment, INT                | id of review
| book_title      | Not Null, VARCHAR(45)            | book title of the review
| book_review     | Not Null, TEXT           | content of the review
| book_rating     | Not Null, INT            | rating (out of 5) of the book


### Routes ⚡
| Routes | HTTP Methods| Description
|:------- |:---------------|:--------------
| /reviews    | GET                  | Displays all reviews
| /reviews      | POST               | Creates a new review
| /reviews/:id      | DELETE            | Deletes a review by id
|/reviews| PUT     | Update book_review and book_rating for a specific review

### Technologies Used
- Node version: 12.14.1
- axios: ^0.21.0
- cors: ^2.8.5
- express: ^4.17.1
- mysql: ^2.18.1
- react-hook-form: ^6.12.1

## Screenshots
### Create Review
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1607036832256/90Le50dgC.png" />

### Read/Update/Delete Review
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1607037016127/6niRU_nTq.png" />



