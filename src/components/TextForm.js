import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
   //     console.log("Uppercase was clicked:"+ text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Convert it to Upper case","success");
    }

    const handleLowClick=()=>{
        //     console.log("Lowercase was clicked:"+ text);
             let newText= text.toLowerCase();
             setText(newText);
             props.showAlert("Convert it to Lower case","success");
         }

    const handleTextClick=()=>{
            //     console.log("Clear text was clicked:"+ text);
                 let newText= '';
                 setText(newText);
                 props.showAlert("Text cleared","success");
             }

    const handleOnChange=(event)=>{
        console.log("on CHange");
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter Text Here');

    return (
        <>
        <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
            <h3 className="my-2">{props.heading}</h3>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"
            onClick={handleUpClick}>Convert to Uppercase</button>
            
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"
            onClick={handleLowClick}>Convert to Lowercase</button>

<button disabled={text.length===0} className="btn btn-primary mx-2 my-2"
            onClick={handleTextClick}>Clear Text</button>
            
            
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((word) => {return word.length!==0}).length} words, {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((word) => {return word.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    );
}
