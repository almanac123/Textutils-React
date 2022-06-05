import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("enter old text here");
    const handleOnChange = (event) => {
      console.log("onchange");
      setText(event.target.value);
    };
  const handleUpClick = () => {
    console.log("uppercase is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase",'success')
  };
  const handleLoClick = () => {
    console.log("lowercase is clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase",'success')
  };
  const capitalize = () => {
    let firstChar = text.charAt(0);
    let newText = firstChar.toLocaleUpperCase();
    setText(newText + text.slice(1));
    console.log("capitalize");
    props.showAlert("First letter capitalized",'success')
  };
  return (
    <>
      <div className="container"  style={{color:props.mode==='dark' ?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control" style={{backgroundColor:props.mode==='dark' ?'grey':'white',color:props.mode==='dark' ?'white':'black'}}
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className={`btn btn-${props.color} mx-2`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.color} `} onClick={handleLoClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.color} mx-2`} onClick={capitalize}>
          capitalize
        </button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark' ?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <b>
          {" "}
          <p>{0.008 * text.split("").length} minutes read</p>
        </b>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}
