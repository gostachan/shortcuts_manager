export default function EnvironmentTableRecord({environment}) {

  return (
    <div className={"record " + environment.className}>
      <div className="column-1">
        <input type="checkbox" id={environment.name}/>
      </div>
      <div className="column-2">
        <p>{environment.name}</p>
      </div>
    </div>
  );
}