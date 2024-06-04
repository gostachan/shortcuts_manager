import FavoriteButton from './favoriteButton/favoriteButton';

export default function ShortcutTableRecord({props}) {

  return (
    <div className={"record " + props.className}>
      <div className="column-1">
        <FavoriteButton/>
      </div>
      <div className="column-2">
        <p>{props.value.command}</p>
      </div>
      <div className="column-3">
        <p>{props.value.keybinding}</p>
      </div>
      <div className="column-4">
        <p>{props.value.when}</p>
      </div>
      <div className="column-5">
        <p>{props.value.environment}</p>
      </div>
    </div>

  );
}