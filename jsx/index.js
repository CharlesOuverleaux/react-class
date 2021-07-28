// we define a class with the component name
function greet() {
  const greetings = ["Hi, ", "Hello! ", "Hi There! ", "Howdy mate! "];
  const name = "Charles";
  return greetings[Math.floor(Math.random() * 4)] + name;
}

class Hello extends React.Component {
  render() {
    // we need to add the () if there is more than one line
    // we can only return one element, so we need to wrap into a div
    return (
      <div>
        <h1>{greet()}</h1>
      </div>
    );
  }
}

// we need this line to call our render function
ReactDOM.render(<Hello />, document.getElementById('root'));
