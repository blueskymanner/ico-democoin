import Web3 from 'web3';

let web3;


if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

  web3 = new Web3(window.web3.currentProvider);
  console.log("metamask is installed");

} else {

  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/ecfc271a15c04e57966930c1dddd289f'
  );

  web3 = new Web3(provider);
}


export default web3;
