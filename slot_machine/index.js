class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <SlotMachine slot1='🍓' slot2='🍒' slot3='🍉'/>
        <SlotMachine slot1='🍑' slot2='🍍' slot3='🥥' />
        <SlotMachine slot1='🫐' slot2='🍐' slot3='🍇' />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
