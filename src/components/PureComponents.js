import React, { PureComponent } from 'react';

class PureComponents extends PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {
          value: 42
        }


        componentDidMount() {
            // Example of shallow comparison
            setTimeout(() => {
              // PureComponent will not re-render even though the value hasn't changed
              // because it performs a shallow comparison and the primitive value is the same.
              this.setState({
                value: 42, // same value
              });
            }, 2000);
        }
          }
  render() {
    console.log('Pure Component rendered');
    return <div>{this.props.value}</div>;
  }
}



  

//   render() {
//     return (
//       <div>
//         <h2>Shallow Comparison Example with PureComponent</h2>
//         <PureExample value={this.state.value} />
//       </div>
//     );
//   }
// }

export default PureComponents;
