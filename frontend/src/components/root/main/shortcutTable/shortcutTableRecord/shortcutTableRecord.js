"use client";

import { useContext } from 'react';

import { Context } from '@/utils/context';
import FavoriteButton from './favoriteButton/favoriteButton';
import GarbageButton from './garbageButton/garbageButton';
import "./shortcutTableRecord.css";


export default function ShortcutTableRecord({value, className}) {
  const { editBtnClicked } = useContext(Context);


  return (
    <div className={"record " + className}>
      <div className="column column-1">
        { editBtnClicked ? (
          <GarbageButton id={value.id} />
        ) : (
          <FavoriteButton id={value.id}
                          favoriteVal={value.favorite}/>
        )}
      </div>
      <div className="column column-2">
        <div className='p-area'>
          <p>{value.keybinding}</p>
        </div>
      </div>
      <div className="column column-3">
        <div className='p-area'>
          <p>{value.command}</p>
        </div>
      </div>
      <div className="column column-4">
        <div className='p-area'>
          <p>{value.when}</p>
        </div>
      </div>
      <div className="column column-5">
        <div className='p-area'>
          <p>{value.environment}</p>
        </div>
      </div>
    </div>

  );
}