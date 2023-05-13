import CategoryFilterBtn from "./CategoryFilterBtn";

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

const CategoryFilter = (props) => {
  const filteredCategory = (category) => {
    props.onCurrentCategory(category);
  };

  return (
    <aside className={props.className}>
      {
        <ul>
          <li>
            <button
              className="btn btn-all-category"
              onClick={(e) => props.onCurrentCategory(e.target.textContent)}
            >
              All
            </button>
          </li>
          {CATEGORIES.map((btn) => (
            <CategoryFilterBtn
              onFilterCategory={filteredCategory}
              key={btn.name}
              category={btn.name}
              color={btn.color}
            />
          ))}
        </ul>
      }
    </aside>
  );
};

export default CategoryFilter;
