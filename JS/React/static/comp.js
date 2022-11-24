class Pen extends React.Component {
    render() {
      return <h2>Hi, this is a blue pen!</h2>;
    }
  }
  
  function Pen() {
    return <h2>Hi, this is a blue pen!</h2>;
  }

  const root = ReactDOM.createRoot(document.getElementById('fun_1'));
  root.render(<Pen />);