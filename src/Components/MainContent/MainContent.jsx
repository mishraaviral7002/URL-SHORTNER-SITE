
import React, { useState } from 'react';
import "./mainContent.css";
import { getter } from "./function";

function MainContent() {
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState("-1");

  const handleShorten = async () => {
    const result = await getter(inputValue);
    setAnswer(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(answer);
    alert("Link copied to clipboard!");
  };

  return (
    <div className='MainContent'>
      <div className='placey'>
        <input 
          type="text" 
          id="target" 
          className="target" 
          placeholder="Paste Your Long Link Here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="submitButtons">
          <button id="Submit" onClick={handleShorten}>Shorten Link</button>
          <button id="analytics">Analytics</button>
        </div>
      </div>

      
      {answer !== "-1" && (
        <div className="resultContainer">
          <div className="resultHeader">
            
           
          </div>
          
          <div className="resultBody">
            <a href={answer} target="_blank" rel="noopener noreferrer" className="shortLink">
              {answer}
            </a>
            
            <div className="resultActions">
              <button className="actionBtn copyBtn" onClick={handleCopy}>
                <span>📋</span> COPY
              </button>
              <a href={answer} target="_blank" rel="noopener noreferrer" className="actionBtn openBtn">
                <span>↗</span> OPEN
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;