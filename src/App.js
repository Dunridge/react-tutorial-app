import React from 'react';
import Ninjas from './components/Ninjas';
import AddNinja from './components/AddNinja';

class App extends React.Component {

    state = {
      ninjas: [
        {name: "Brian", age: 21, belt: 'black', id: 1},
        {name: "Max", age: 19, belt: 'black', id: 2},
        {name: "Vlad", age: 19, belt: 'black', id: 3}
      ]
    }

    addNinja = (ninja) => {
      ninja.id = Math.random();
      let ninjas = [...this.state.ninjas, ninja];
      console.log(ninjas); //this is working and adding the ninjas
      this.setState({
        ninjas: ninjas
      });
    }

    deleteNinja = (id) => {
      let ninjas = this.state.ninjas.filter(ninja => {
        return ninja.id !== id;
      });

      this.setState({
        ninjas: ninjas
      });

      console.log(id);
    }

    componentDidMount() {
      console.log("component mounted");
    }

    componentDidUpdate(prevProps, prevState) {
      console.log("component updated");
      console.log(prevProps, prevState);
    }

    render() {
        return (
            <React.Fragment>
                <h1>My first React app</h1>
                <p>Welcome)</p>
                <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
                <AddNinja addNinja={this.addNinja}/>
                {/* <Ninjas ninjaName = "Max" ninjaAge = {19} ninjaBelt = "black"/> */}
            </React.Fragment>
        );
    }
}

export default App;
