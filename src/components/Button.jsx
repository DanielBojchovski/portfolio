export default function Button(props) {
  return (
    <button className= { props.className } onClick={props.functionToExecuteOnClick}>
      { props.buttonText }
    </button>
  );
}
