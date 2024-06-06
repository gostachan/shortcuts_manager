import "./basicButton.css"

export default function BasicButton({props={modal: false}}) {

  return (
    <button className={`basic-button ${props.className}`}>
      {props.value}
    </button>
  );
}