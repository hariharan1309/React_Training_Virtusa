
const myElement = React.createElement('h1', {}, 'I use JSX! as String in React');

const jsx1 = ReactDOM.createRoot(document.getElementById('jsx_1'));
root.render(myElement);
//
const myElement1 = <h1>I use JSX! as HTML in React</h1>;

const jsx2 = ReactDOM.createRoot(document.getElementById('jsx_2'));
root.render(myElement);
