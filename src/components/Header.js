const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Today I Learned" height="68" width="68" />
        <h1>Today I Learned</h1>
      </div>
      <button className="btn toggle-form" onClick={props.onClick}>
        {props.showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
};

export default Header;
