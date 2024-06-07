import "./toggleButton.css"

export default function ToggleButton({onUpdate, value, className}) {
  function handleClick() {
    onUpdate();
  }

  return (
    <button className={`toggle-button ${className}`}
            onClick={handleClick}>
      {value}
    </button>
  );
}