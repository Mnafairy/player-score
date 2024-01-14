import "../styles/add.css";
import { useState } from "react";
export default function Add() {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <div className="Add">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formValues.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="score">Score</label>
          <input
            type="text"
            id="score"
            value={formValues.score || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
