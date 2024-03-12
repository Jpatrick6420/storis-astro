function Button({ onClick, type }) {
  const baseStyles = "px-2 mx-4 hover:scale-105 active:scale-100";
  let styles = "";
  if (type === "primary") {
    styles =
      "bg-purple-800 text-stone-50 rounded-lg  hover:bg-purple-700 " +
      baseStyles;
  }
  return (
    <button onClick={onClick} className={styles}>
      Reset
    </button>
  );
}

export default Button;
