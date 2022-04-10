import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import web3 from '../web3.js';
import ico from '../ethereum/ico.js';


class Contribute extends Component {

state = {
  value: ''
}

onSubmit = async event => {
  event.preventDefault();

  let accounts = await web3.eth.getAccounts();
  await ico.methods.buyTokens().send({
    from: accounts[0],
    value: web3.utils.toWei(this.state.value, 'ether')
  });

};


  render() {
    return (
      <div>
        <div class="contribute">Contribute</div>
          <div class=" contributeContainer">
            <form onSubmit= {this.onSubmit}>
              <div class="buyCoins">
                <div class="amountToBuy">Amount of ether to buy:</div>
                <TextField value={this.state.value} onChange= {event => this.setState({value:event.target.value})}> </TextField>
                <div> ≈ {this.state.value * 125} DC </div>
                <div class="etherDC"> (1 ETH ≈ 100 + 25 (Bonus) DC) </div>
              </div>
              <div class="buttonBuy">
                <Button type="submit" variant="contained" color="primary" value="Submit">Buy DC Tokens | 25% Bonus </Button>
              </div>
            </form>

            <div class="flex errorMessage">
              <i class="material-icons">error_outline</i>
              <div >Error Message: asydassadasdas</div>
            </div>

            <div class="flex loadingContainer">
              <div>
                <div class="loadingText"> Waiting For Confirmation</div>
                <div class="loadTextSub">(this can take up to 30 seconds)</div>
              </div>
              <CircularProgress/>
            </div>

            <div class="flex successfully">You successfully bought DC Coins!</div>

        </div>
      </div>
    );
  }
}

export default Contribute;
