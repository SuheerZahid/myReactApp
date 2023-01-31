import React, { useState } from 'react'



export default function Textform(props) {

    //UPPERCASE
    const handleUpClick = () => {
        // console.log('Uppercase Button clicked' + text);
        let newValue = text.toUpperCase();
        setText(newValue);
        props.showAlert("Text converted to uppercase!", "success");
    }

    //LOWERCASE
    const handleLowClick = () => {
        let newValue = text.toLowerCase();
        setText(newValue);
        props.showAlert("Text converted to lowercase!", "success");
    }

    //CLEAR TEXT
    const handleClearClick = () => {
        if (text.length === 0) {
            props.showAlert("Please enter your text first", "warning");
        }
        else {
            let cnfrm = window.confirm("Do you want to clear text");
            if (cnfrm === true) {
                let newValue = "";
                setText(newValue);
                props.showAlert("Text is clear", "success");
            }
            else {
                setText(text);
            }
        }

    }

    //COPY TEXT
    const handleCopy = () => {
        if (text.length === 0) {
            props.showAlert("Write any text to copy", "warning");
        }
        else {
            let text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to clipboard", "success");
        }
    }


    const handleOnChange = (event) => {
        // console.log('On Change Clicked');
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" placeholder='Enter your Text' rows="9"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            </div>

            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{text.length === 0 ? "0" : 0.008 * text.split(" ").length} Minutes to read</p>
                <hr />
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Write Something to Preview"}</p>
            </div>
        </>
    )
}




Textform.defaultProps = {
    heading: "Please enter heading."
}

