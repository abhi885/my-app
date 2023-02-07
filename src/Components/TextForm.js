import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick= ()=>{
    //console.log("Upper case clicked." + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert1("Converted to upper case","success");
  }

    const handleLoClick= ()=>{
      //console.log("Upper case clicked." + text);
      let newText=text.toLowerCase();
       setText(newText);
       props.showAlert1("Converted to Lower case","success");
    }

      const handleClearClick= ()=>{
        //console.log("Upper case clicked." + text);
        let newText=' ';
        setText(newText);
  }
  const handleCopyClick=()=>{
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }

  const handleOnChange = (event)=>{
    //console.log("OnChange");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Text here');
  //text="new Text"; //Wrong way to update the text.
  //setText("new Text"); // Correct way to update the text.
  return (
    <>
    <div className="container" style={{color:props.mode=='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>

       <div className="mb-3">
       
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=='dark'?'grey':'white',color:props.mode=='light'?'black':'white'}} id="myBox" rows="3"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>ConvertToUpperCase</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick}>ConvertToLowerCase</button>
       <button className="btn btn-primary mx-2" onClick={handleClearClick}>ClearText</button>
       <button className="btn btn-primary mx-2" onClick={handleCopyClick}>CopyText</button>
    </div>

    <div className="container my-3" style={{color:props.mode=='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters.</p>
    <p>Time required : {0.025*text.split(" ").length} minutes to read.</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
  }  
