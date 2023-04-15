import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText=setText(text.toUpperCase(text));
        props.showalert(":Converted to Uppercase","success");
    }
    const handleDownClick = ()=>{
        let newText=setText(text.toLowerCase(text));
        props.showalert(":Converted to Lowercase","success");
    }
    const handleclearClick = ()=>{
        let newText=setText('');
        props.showalert(":Cleared Text","success");
    }
    const handlecopy =()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert(":Copied Text","success");
    }
    const handleextraspaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert(":Removed Extra Spaces","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container'>
            <h3>{props.heading}</h3>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleextraspaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length -1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}mins read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Some Text in The above area to Preview it here"}</p>
        </div>
        </>
    )
}
