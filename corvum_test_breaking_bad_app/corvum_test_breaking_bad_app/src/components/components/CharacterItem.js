/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from 'react'

//--------------------------------------------------------------
const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-item'>
        <div className='card-front'>
          <img src={item.img} alt='Breaking Bad Character Images' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li className="occupation">
              <strong>Occupation:</strong> {item.occupation}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <strong>Appearance:</strong> {item.appearance}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
