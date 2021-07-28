class App extends React.Component {
  render () {
    return(
    <div>
      <Greet />
      <Lottery />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
