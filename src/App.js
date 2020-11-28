import "./App.css";
import logo from "./img/ravenclaw.png";

function App() {
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
      <h4>Add a review</h4>
      <div className="add-review">
        <input type="text" name="title" placeholder="Book Title" />

        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          placeholder="Rating"
        />
        <input type="text" name="review" placeholder="Review" />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
