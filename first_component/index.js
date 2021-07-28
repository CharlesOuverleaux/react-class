// we define a class with the component name
class Hello extends React.Component {
  render() {
    // we need to add the () if there is more than one line
    // we can only return one element, so we need to wrap into a div
    return (
      <div>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
      </div>
    );
  }
}

// we need this line to call our render function
ReactDOM.render(<Hello />, document.getElementById('root'));
