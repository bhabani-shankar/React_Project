import React, {useState} from 'react'


export default function TextArea(props) {
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const handleUpClick = () => {
    let upper = text.toUpperCase()
    setText(upper)
    // setText("hello");
  }
  const [text, setText] = useState("Enter any value");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}


