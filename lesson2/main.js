const HelloComponent = React.createClass({
  render() {
    return  (
      <div>
        <h1>Hello {this.props.name}</h1>
        <img src={this.props.avatar}/>
      </div>
    )
  }
});


ReactDOM.render(
  <HelloComponent name="Volodymyr" avatar="https://i11.kanobu.ru/c/bc90eb298eefc0475cbbdc121010218c/293x244/u.kanobu.ru/articles/pics/1e8c371b-536f-4a73-8878-ac210f42d4ad.jpg"/>,
  document.getElementById('root')
)
console.log("hi");
