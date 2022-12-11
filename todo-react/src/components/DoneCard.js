import './DoneCard.css'
import DoneItem from './item/DoneItem';

function DoneCard () {
  return (
    <div id="done" className="neumorph">
      <h4 className="title">already done</h4>
      <ul className="done-list">
        <DoneItem />
        <DoneItem />
      </ul>
    </div>
  )
}

export default DoneCard;
