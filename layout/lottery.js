function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class Lottery extends React.Component {
  render() {
    const num = getNum();
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
        <p>Your number is {num}</p>
        {msg}
      </div>
    );
  }
}
