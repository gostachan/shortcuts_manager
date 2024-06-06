import "./toggleButton.css"

export default function ToggleButton({props={modal: false}, onUpdate}) {
  function handleClick() {
    onUpdate();
  }

  return (
    <button className={`toggle-button ${props.className}`}
            onClick={handleClick}>
      {props.value}
    </button>
  );
}