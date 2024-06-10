import FavoriteButton from './favoriteButton/favoriteButton';
import "./shortcutTableRecord.css";

export default function ShortcutTableRecord({value, className}) {

  return (
    <div className={"record " + className}>
      <div className="column-1">
        <FavoriteButton favoriteVal={value.favorite}/>
      </div>
      <div className="column-2">
        <p>{value.command}</p>
      </div>
      <div className="column-3">
        <p>{value.keybinding}</p>
      </div>
      <div className="column-4">
        <p>{value.when}</p>
      </div>
      <div className="column-5">
        <p>{value.environment}</p>
      </div>
    </div>

  );
}