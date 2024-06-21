import "./basicButton.css"

export default function BasicButton({value, className, func}) {

  return (
    <button onClick={func}
            className={`basic-button ${className}`}>
      {value}
    </button>
  );
}