import React from 'react';
import './App.css';
// import car from './car1.jpeg';

{/*function App() {
  return (
    <div className="App">
      {/* this is a comment example
      <h1>My React Project</h1>
      <p>This is my first react project</p>
    </div>
  );
}
*/}

// const Pet = (props) => {
//   return (
//     <div>
//       <p>Your pets name is {props.petName}</p>
//     </div>
//   )
// }

// const carHeader = (props) => {
//   return
//   <div>
//     <img src{car} alt="car" />
//   </div>
// }

// const Person = (props) => {
//   return (
//     <div>
//       <p>My name is {props.name}</p>
//       <Pet petName={props.pet} />
//     </div>
//   )
// }


// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>This is a class component</h1>
//         <Person name="Matthew" age={25} pet="Diego" />
//         <Person name="Jack" age={26} pet="Draco" />
//         <Person name="Susan" age={55} pet="Cliff" />
//       </div>
//     )
//   }
// }
class App extends React.Component {
  render() {
    return (
      <div className="container">

        <h1>Frequently Asked Questions</h1>

        <div className="center">
          <div className="what">
            <p>What is Netflix?</p>
            <dropdownbutton className="plusone" type="dropdownbutton">+</dropdownbutton>
          </div>

          <div className="cost">
            <p>How much does Netflix cost?</p>
            <dropdownbutton className="plustwo" type="dropdownbutton">+</dropdownbutton>
          </div>

          <div className="where">
            <p>Where can I watch?</p>
            <dropdownbutton className="plusthree" type="dropdownbutton">+</dropdownbutton>
          </div>

          <div className="how">
            <p>How do I cancel?</p>
            <dropdownbutton className="plusfour" type="dropdownbutton">+</dropdownbutton>
          </div>

          <div className="watch">
            <p>What can I watch on Netflix?</p>
            <dropdownbutton className="plusfive" type="dropdownbutton">+</dropdownbutton>
          </div>

          <div className="trial">
            <p>How does the free trial work?</p>
            <dropdownbutton className="plussix" type="dropdownbutton">+</dropdownbutton>
          </div>

        </div>

        <div className="try">
          <button type="button">TRY 30 DAYS FREE ></button>
        </div>

      












      </div>
    )
  }
}






export default App;
// export default carHeader;


