const CategoryFilterBtn = (props) => {
  const { color } = props;

  const categoryHandler = (e) => {
    console.log(e.target.textContent);
    props.onFilterCategory(e.target.textContent);
  };

  return (
    <li
      className={`btn btn-category`}
      style={{ backgroundColor: `${color}` }}
      onClick={categoryHandler}
    >
      {props.category}
      {/* <button type="button">{props.category}</button> */}
    </li>
  );
};

export default CategoryFilterBtn;
