// we define a class with the component name
function greet() {
  const greetings = ["Hi, ", "Hello, ", "Hi there, ", "Howdy mate, "];
  const name = "Charles";
  return greetings[Math.floor(Math.random() * greetings.length)] + name;
}

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class Hello extends React.Component {
  render() {
    // we need to add the () if there is more than one line
    // we can only return one element, so we need to wrap into a div
    const num = getNum();
    // IF STATEMENT 1 & 2
    // return (
    //   <div>
    //     <h1>{greet()}</h1>
    //     <p>Your number is {num}</p>
    //     <p>{num === 7 ? "Nice that's the lucky number" : "Too bad try again"}</p>
    //     {
    //       num === 7 &&
    //       <img src="https://media.giphy.com/media/5C2aHYut0kzXrf1Z7D/giphy.gif"/>
    //     }
    //   </div>
    // );
    let msg;
    if (num === 7) {
      msg =
        <div>
          <p>CONGRATS, that's the lucky number</p>
          <img src="https://media.giphy.com/media/5C2aHYut0kzXrf1Z7D/giphy.gif" />
        </div>
    } else {
      msg =
        <div>
          <p>SORRY, try again</p>
          <img src="https://media.giphy.com/media/3o7WIwkSmw32NgXvTG/giphy.gif" />
        </div>
    }
    return (
      <div>
        <h1>{greet()}</h1>
        <p>Your number is {num}</p>
        {msg}
      </div>
    );
  }
}

// we need this line to call our render function
ReactDOM.render(<Hello />, document.getElementById('root'));
