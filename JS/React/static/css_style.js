import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "Grey",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Stylish!</h1>
      <p>Hey There It's Me!</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('style_css'));
root.render(<Header />);
