import React, {useState} from 'react'


export default function TextArea(props) {
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const handleUpClick = () => {
    let upper = text.toUpperCase()
    setText(upper)
    props.showAlert("String is converted to Uppercase.","success");
    // setText("hello");
  }
  const handleDownClick = () => {
    let lower = text.toLowerCase()
    setText(lower)
    props.showAlert("String is converted to Lowercase.","success");
    // setText("hello");
  }
  const handleClear = ()=>{
    setText("")
    props.showAlert("Text Cleared.","success");
  }
  const [text, setText] = useState("");
  return (
    <div className='container'>
      <h1 style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
      color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>No. of Letters: {text.length} and No. of words: {text.split(' ').length}.</p>
        <h2>Preview</h2>
        <p>{text.length===0?"Enter Something on the TextField to preview.":text}</p>
      </div>
    </div>
  )
}


