const Web3 = require("web3");
// const ethNetwork = "https://rinkeby.infura.io/v3/a8e47da83b924870bc950481841a3d3e"
const ethNetwork = "https://rinkeby.infura.io/v3/"+process.env.PROJECT_ID


try {
        console.log(process.env.PROJECT_ID)
        const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));
        console.log("Connection Successfull!");
        console.log("Latest Block Number: ");
        web3.eth.getBlockNumber().then(console.log);
}
catch(e) {
        console.log("Connection Error!", e);
}
