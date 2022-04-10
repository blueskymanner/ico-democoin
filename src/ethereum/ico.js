import web3 from '../web3.js';
import newICO from './build/ICO.json';

 
const instance = new web3.eth.Contract(
  JSON.parse(newICO.interface), '0xbfec4128703925f671d61969bae097e696c46c2f'
);

export default instance; 
