import './DoneCard.css'
import DoneItem from './item/DoneItem';

function DoneCard (props) {
  return (
    <div id="done" className="neumorph">
      <h4 className="title">already done</h4>
      <ul className="done-list">
        {
          props.doneList.map(done =>
            <DoneItem key={done.id} text={done.name}/>
          )
        }
        <DoneItem />
      </ul>
    </div>
  )
}

export default DoneCard;
