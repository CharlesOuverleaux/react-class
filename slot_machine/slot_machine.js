function getRandom(array){
  return array[Math.floor(Math.random() * array.length)];
};


class SlotMachine extends React.Component {
  render() {
    const slots = [this.props.slot1, this.props.slot2, this.props.slot3];
    const slotOne = getRandom(slots);
    const slotTwo = getRandom(slots);
    const slotThree = getRandom(slots);
    const winner = (slotOne === slotTwo) && (slotTwo === slotThree);
    const colors = { fontSize: '50px'};
    return (
      <div className="SlotMachine">
        <p>Here is your luck:</p>
        <p style={colors}>
          {slotOne} - {slotTwo} - {slotThree}
        </p>
        <p className={winner ? "win" : "lose"}>
          {winner ? "You won" : "You lost"}
        </p>
        {
          winner &&
          <img src="https://media.giphy.com/media/917Ve5cLpoB3Nhd1xh/giphy.gif"/>
         }
      </div>
    );
  }
}

ReactDOM.render(<SlotMachine />, document.getElementById('root'));
