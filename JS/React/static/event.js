function Football() {
    const shoot = () => {
      alert("Great Shot!");
    }
  
    return (
      <button onClick={shoot}>Take the snap!</button>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('even_1'));
  root.render(<Football />);
  