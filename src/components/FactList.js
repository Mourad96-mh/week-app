import FactItem from "./FactItem";

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

const FactList = (props) => {
  return (
    <section className={props.className}>
      <ul>
        {props.facts.map((fact) => (
          <FactItem
            id={fact.id}
            key={fact.id}
            text={fact.text}
            category={fact.category}
            source={fact.source}
            votesInteresting={fact.votesInteresting}
            votesMindblowing={fact.votesMindblowing}
            votesFalse={fact.votesFalse}
            color={CATEGORIES.find((cat) => cat.name === fact.category).color}
          />
        ))}
      </ul>
    </section>
  );
};

export default FactList;
