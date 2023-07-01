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
  const handleDownClick = () => {
    let lower = text.toLowerCase()
    setText(lower)
    // setText("hello");
  }
  const [text, setText] = useState("");
  return (
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
      <div className="container">
        <h2>Text Summary</h2>
        <p>No. of Letters: {text.length} and No. of words: {text.split(' ').length}.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}


