import './AddCard.css'

function AddCard () {
  return (
    <div id="add" className="neumorph no-display">
      <div className="title">
        please enter
      </div>
      <form className="add-form">
        <input className="add-ipt" type="text" name="todo" />
        <button className="submit-btn" type="submit">submit</button>
      </form>
    </div>
  )
}

export default AddCard;
