function Card(props) {
  const classes = "card " + props.childrenName;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
