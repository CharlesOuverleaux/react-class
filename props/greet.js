function greet() {
  const greetings = ["Hi, ", "Hello, ", "Hi there, ", "Howdy mate, "];
  const name = "Charles";
  return greetings[Math.floor(Math.random() * greetings.length)] + name;
}

class Greet extends React.Component {
  render() {
    // this.props is an object, so we can access all the props
    // of it simply calling them
    console.log(this.props)
    return <h1>{greet()}! from {this.props.from} to {this.props.to}</h1>
  }
}
