import React from "react";

class Get extends React.Component {

  constructor() {
    super()
    this.state = {
      error : null,
      items:[],
        onClick: "Click me please!!",
    }
  }
  showData() {
    const items = this.state.items || [];
    return items.map(items => {
      return (<h1><tr key={items.id}>
        <table>
        <td key={items.name}>{items.name}</td>
        <td key={items.population}>{items.population}</td>
        </table>
        </tr></h1>);
    });
  }
     getData = async () => {
     let getItems = await fetch(`http://cities.jonkri.se/`);
     let info = await getItems.json();
     this.setState({items: info})
  }

//  ComponentDidMount(){
//    fetch('http://cities.jonkri.se/')
//    .then(result => {
//    return result.json();
//  }).then(getData => {
//    let items = getData.result.map((data) => {
//      return(
//        <div key={data.result}>
//        </div>
//      )
//  })
//  this.setState({items: items});
//  console.log("state", this.state.items);
//  console.log(this.state.result);
//  })
//  }

nameChange = () => {
    this.setState({ onClick: "Fetching data completed"});
}

  render() {
    return (
    <div>
      <button onClick={this.getData}>
        Click me to get all data from website </button>
      <button onClick={this.nameChange}>{this.state.onClick}</button>
      <table>
        <tbody>
        <tr>
        <td>{this.showData()}</td>
        </tr>
        </tbody>
      </table>

  </div>)
  };
};
export default Get;
