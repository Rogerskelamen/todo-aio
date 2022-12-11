import { useState } from 'react';
import './DoneItem.css'

function DoneItem () {
  const [text, setText] = useState('asdf')

  return (
    <li className="done-item item">
      <span className="text">{ text }</span>
    </li>
  )
}

export default DoneItem;
