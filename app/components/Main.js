// Include React
import React from 'react';
import ReactDOM from 'react-dom'
import './style.scss';

// Creating the Main component
class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
       let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
       let ctx = canvas.getContext('2d');
       ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
   }

  // Render Page
  render() {

    return (
      <div>
        <h1>i am here</h1>
        <canvas ref='myCanvas' className='draw' width="200" height="100"/>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Main;
