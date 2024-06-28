"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import "./garbageButton.css"
import apiClient from '@/utils/apiClient';
import { useContext } from 'react';
import { MyAppContext } from '@/app/page';

export default function GarbageButton({id}) {
  const { updateValueSets } = useContext(MyAppContext);

  function handleClick() {
    console.log("clicked");
    apiClient.delete(`/shortcuts/${id}`)
    .then(function(response) {
      console.log(response);
      if (response.status === 200) {
        updateValueSets();
      }
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  return (
    <FontAwesomeIcon icon={faTrash} 
                      onClick={handleClick}
                      className='trash' />
  );
}