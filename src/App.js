import React, { Component } from 'react';
import './css/App.css';
import Button from '@material-ui/core/Button';
import Start from './components/Start';
import About from './components/About';
import Whitepaper from './components/Whitepaper';
import Roadmap from './components/Roadmap';
import Contribute from './components/Contribute';
import Team from './components/Team';
import scrollToComponent from 'react-scroll-to-component';

import ico from './ethereum/ico.js'
import web3 from './web3.js';

class App extends Component {

state = {
  myBalance: '',
  myEther: '',
  myAddress: ''
}

async componentDidMount(){

try{
  let accounts = await web3.eth.getAccounts();

  let myBalance = await ico.methods.myBalance().call({from:accounts[0]});
  myBalance = web3.utils.fromWei(myBalance, 'ether');

  let myBalanceEther = await web3.eth.getBalance(accounts[0]);
  myBalanceEther = web3.utils.fromWei(myBalanceEther, 'ether');
  let myEther = myBalanceEther;

  let myAddress = await ico.methods.myAddress().call({from:accounts[0]});

  this.setState({myBalance, myEther, myAddress});
}catch(err){
  console.log("metamask isn't installed");
}

}

  render() {

    console.log(web3.version);
    return (
      <div>
        <nav>
          <a href="/" class="titleICO">
            <i class="material-icons">group_work</i>
            <div>DEMOICO</div>
          </a>
          <div class="middleNav">
            <a onClick={() => scrollToComponent(this.About, { offset: -70, align: 'top', duration: 1500})}><Button>About</Button></a>
            <a onClick={() => scrollToComponent(this.Whitepaper, { offset: -70, align: 'top', duration: 1500})}><Button>Whitepaper</Button></a>
            <a onClick={() => scrollToComponent(this.Roadmap, { offset: -70, align: 'top', duration: 1500})}><Button>Roadmap</Button></a>
            <a onClick={() => scrollToComponent(this.Contribute, { offset: -70, align: 'top', duration: 1500})}><Button>Contribute</Button></a>
            <a onClick={() => scrollToComponent(this.Team, { offset: -70, align: 'top', duration: 1500})}><Button>Team</Button></a>
          </div>

          <div class="rightNav">
            <i class="material-icons">account_box</i>

            <div class="myAccountBox">
              <div class="address">{"Address: " + this.state.myAddress}</div>
              <div class="eth">{"My Ether: " + this.state.myEther}</div>
              <div class="dctoken">{"My DC: " + this.state.myBalance}</div>
            </div>
          </div>

        </nav>

        <div id="startDiv"> <Start/> </div>
        <div ref={(section) => { this.About = section; }}><About/></div>
        <div ref={(section) => { this.Whitepaper = section; }}> <Whitepaper/> </div>
        <div ref={(section) => { this.Roadmap = section; }}> <Roadmap/> </div>
        <div ref={(section) => { this.Contribute = section; }}> <Contribute/> </div>
        <div ref={(section) => { this.Team = section; }}> <Team/> </div>

      </div>
    );
  }
}

export default App;
