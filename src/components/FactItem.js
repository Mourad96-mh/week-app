const FactItem = (props) => {
  const color = props.color;
  // console.log(color);

  return (
    <li className="fact" key={props.id}>
      <p>
        {props.text}
        <a className="source" href={props.source}>
          (Source)
        </a>
      </p>
      <span className="tag" style={{ backgroundColor: `${color}` }}>
        {props.category}
      </span>
      <div className="vote-buttons">
        <button>👍{props.votesInteresting}</button>
        <button>🤯{props.votesMindblowing}</button>
        <button>⛔️{props.votesFalse}</button>
      </div>
    </li>
  );
};

export default FactItem;
