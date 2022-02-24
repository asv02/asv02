import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
  const [text,setText]=useState(``)

  let handleit=(event)=>{
      console.log("Handled it")
      setText(event.target.value)
  }
  let upper=()=>{
      let newText=text.toUpperCase()
      setText(newText)
      console.log("Upper case")
      props.title("To upper case")
  }
  let lower=()=>{
      let newText=text.toLowerCase()
      setText(newText)
      console.log("Upper case")
      props.title("To Lower case")
  }
  let emails=()=>{
     let array= text.split(" ")
     for(let i=0;i<array.length;i++){
         if(array[i].includes('@')){
           console.log(array[i])
           props.title("Emails extracted")
         }
     }
  }
  let clear=()=>{
     let newText=""
     setText(newText)
     props.title("Clearing")
  }
const copy=()=>{
  let newText=text;
  navigator.clipboard.writeText(newText)
  setText("")
  props.title("Copying")
}
const length=()=>{
  let array=text.split(" ");
  let len=text.split(" ").length;
  array.forEach((ele)=>{
  if(ele===" ")
    len--}
  )
  return len;
}
   return (
    <><div className="form-floating">
    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={handleit} ></textarea>
    <label htmlFor="floatingTextarea">Text Area</label>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={upper}>ConvertToUpper</button>
    <button type="button" className="btn btn-danger my-2 mx-2" onClick={lower}>ConvertToLower</button>
    <button type="button" className="btn btn-warning my-2 mx-2" onClick={emails}>Extract Emails</button>
    <button type="button" className="btn btn-warning my-2 mx-2" onClick={clear}>Clear</button>
    <button type="button" className="btn btn-success my-2 mx-2" onClick={copy}>Copy</button>
  </div>
  <div>
      <p>Number of Character:{text.length}</p>
      <p>Number of words:{length()}</p>
      <p>Minutes required to read:{0.008*(text.split(" ").length)}</p>
      {/* where it will find " ",it will split the string into substrings and stores in array */}
      <h2>Preview for Uppercase</h2>
      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text.toUpperCase()} ></textarea>
      <h2>Preview for Lowercase</h2>
      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text.toLowerCase()} ></textarea>
  </div>
    </>
  )
}
