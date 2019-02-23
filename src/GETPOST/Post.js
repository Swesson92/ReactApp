import React from "react";

class Post extends React.Component {

  constructor() {
    super()
    this.state = {
      id: ' ',
      population: ' ',
      city: ' ',
      onClick: "Post here!"
    }
    this.makeChange = this.makeChange.bind(this);
  }
  makeChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({[name]: value});
  }

  makePost = async (y) => {
    y.preventDefault();
    fetch('http://cities.jonkri.se/', {
      body: JSON.stringify({name: this.state.city,
                            population: this.state.population}),
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            method: 'POST'
                          }).then((result) => result.json())
                    }
  render() {
    return (<form onClick={this.makePost}>
      <input type="text" name="population" placeholder="Population..." value={this.state.population} onChange={this.makeChange}/>
      <input type="text" name="city" placeholder="City..." value={this.state.city} onChange={this.makeChange}/>
      <button onClick={this.nameChange}>{this.state.onClick}</button>
    </form>);
  }
};
export default Post;
