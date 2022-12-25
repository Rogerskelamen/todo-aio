import './DoneItem.css'

function DoneItem (props) {
  return (
    <li className="done-item item">
      <span className="text fade-in">{ props.text }</span>
    </li>
  )
}

export default DoneItem;
