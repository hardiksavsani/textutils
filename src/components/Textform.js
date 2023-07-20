import React, { useState } from "react";

export default function Textform(props) {
  const handleExtraspace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const handleCopytext = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handlecleartext = () => {
    // console.log("uppercase was clicked"+text);
    let newText = "";

    setText(newText);
    props.showAlert("convert to cleartext!", "success");
  };

  const handleUPclick = () => {
    // console.log("uppercase was clicked"+text);
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("converted to uppercase!", "success");
  };
  const handleLOclick = () => {
    // console.log("uppercase was clicked"+text);
    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("convert to lowercase!", "success");
  };
  const handleonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("enter text here");

  // text="new text";     wrong way to change the state
  // setText="new text";  right way to change the state

  return (
    <>
      <div
        className="comtainer"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div>
          <h1>{props.heading}</h1>
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control"
                style={{
                  background: props.mode === "dark" ? "grey" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
                value={text}
                onChange={handleonchange}
                id="myBox"
                rows="8"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary mx-3"
              onClick={handleUPclick}
            >
              Convert to upercase
            </button>
            <button
              type="submit"
              className="btn btn-primary mx-3"
              onClick={handleLOclick}
            >
              Convert to lowercase
            </button>
            <button
              type="submit"
              className="btn btn-primary mx-3"
              onClick={handlecleartext}
            >
              clear text
            </button>

            <button
              type="submit"
              className="btn btn-primary mx-3"
              onClick={handleCopytext}
            >
              Copy text
            </button>

            <button
              type="submit"
              className="btn btn-primary mx-3"
              onClick={handleExtraspace}
            >
              Remove Extraspace
            </button>
          </form>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>your text summery</h1>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} caracters
        </p>
        <p>{0.008 * text.split(" ").length}</p>
        <h1>preview</h1>
        <p>{(text.length < 0) & text || "enter something here"}</p>
      </div>
    </>
  );
}
