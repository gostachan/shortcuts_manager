import "./basicButton.css"

export default function BasicButton({props}) {


  return (
    <button className={props.className}>{props.value}</button>
  );
}