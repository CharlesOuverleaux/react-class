class App extends React.Component {
  render() {
    return (
      <div>
        <Greet to="John" from="Paul"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
