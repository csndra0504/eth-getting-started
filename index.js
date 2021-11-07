async function main() {
  console.log("Hello World");
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
  const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/ax2KxuH7GD_KBMEhPsXBDxQeN69N3v2O");
  const blockNumber = await web3.eth.getBlockNumber();
  console.log("The latest block number is " + blockNumber);
}
main();
