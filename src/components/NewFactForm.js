import { useState } from "react";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const NewFactForm = (props) => {
  const [fact, setFact] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("tech");

  const factLength = fact.length;

  const factHandler = (e) => {
    setFact(e.target.value);
  };

  const sourceHandler = (e) => {
    setSource(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (fact && source && category) {
      props.onAddData({ fact, source, category });
    } else {
      console.log("Please add data into all fields");
      return;
    }
    setFact("");
    setSource("");
    setCategory("");
  };

  return (
    <form className={props.className} onSubmit={submitHandler}>
      <input
        value={fact}
        type="text"
        placeholder="Share a fact with the world.."
        onChange={factHandler}
      />
      <span>{200 - factLength}</span>
      <input
        value={source}
        type="text"
        placeholder="Trustworthy source..."
        onChange={sourceHandler}
      />
      <select onChange={categoryHandler}>
        <option value={category}>choose category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
      <button className="btn">Post</button>
    </form>
  );
};

export default NewFactForm;
