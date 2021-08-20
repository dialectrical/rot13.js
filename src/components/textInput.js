import React from 'react';
import { inputDecoder } from './decoder';

export class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'glcr nal ybjrepnfr grkg vagb guvf obk gb rapelcg be qrplcure vg hfvat n ROT plcure. SPECIAL CHARACTERS, NUMBERS, AND CAPTIAL LETTERS WILL NOT CONVERT.',
      rot: 13
    };

    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      this.setState({text: event.target.value});
    }

  render() {
    return (
      <div>
        <div>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </div>
        <div>
          <b>Rotated by 13 places:</b>
        </div>
        <div>
          {inputDecoder(this.state.text, this.state.rot)}
        </div>
      </div>
    );
  }
}

export default UserInput;
