import "./flash.css";

export default function Flash({type}) {

  return (
    <div className={`flash ${type}`}>
      <h1>This is a flaaaaaaash!</h1>
    </div>
  )
}