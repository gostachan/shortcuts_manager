import "./basicButton.css"

export default function BasicButton({value, className, onclick}) {

  return (
    <button onClick={onclick}
            className={`basic-button ${className}`}>
      {value}
    </button>
  );
}