import "./basicButton.css"

export default function BasicButton({props}) {


  return (
    <button className={"basic-button " + props.className}>{props.value}</button>
  );
}