import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upper case was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted To Upper Case","success");
    }
    const handleLowerClick=()=>{
        console.log("Upper case was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted To Lower Case","success");
    }
    const handleChange=(event)=>{
        console.log("On change")
        setText(event.target.value);
    }
    //To copy to clipboard
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","success");
    }
    let myStyle={
        color: props.mode==='dark'?'white':'#042743',
    };
    //To remove extra spaces
    const removeSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed","success");
    }
    const [text,setText]=useState('');  //hook in react
    //text ="new text"; ---> this is the wrong way to change State
    //setText("new Text");-->this is the right way to change State

    const handleClear=()=>{
        setText("");
        props.showAlert("Cleared","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
  return (
    <>
    <div className='container'>
        <h1 style={myStyle}>{props.heading}</h1>
        <div className="container">
            <div className="mb-3 my-3">
                <textarea style={{color: props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#044d8c':'white'}} className="form-control" id="myBox" value={text} onChange={handleChange} placeholder="Address" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={speak}>Speak</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeSpace}>Remove Space</button>
        </div>  
        <div className="container my-3" >
            <h1 style={myStyle}>Text Summary</h1>
            <p style={myStyle}>number of words = {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} number of characters = {text.length}</p>
            <p style={myStyle}>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}Minutes taken to read</p>
            <h2 style={myStyle}>Preview</h2>
            <p className='preview' style={myStyle}>{text.length>0?text:'Nothing to preview'}</p>
        </div>
    </div>
</>
  )
}
