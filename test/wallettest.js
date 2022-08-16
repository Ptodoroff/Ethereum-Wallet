const Wallet = artifacts.require("Wallet");
let wallet;

contract("Wallet", (accounts) => {
    beforeEach( async () => {
     wallet=  await Wallet.deployed();
    })
     it ("should accept deposits", async () => {
        let startingBalance = await web3.eth.getBalance(wallet.address);
        let depositValue = web3.utils.toWei("5", "ether")
        await wallet.deposit({from:accounts[0], value:depositValue});
        let newBalance = await web3.eth.getBalance(wallet.address)
        assert(Number(newBalance.toString()) ==Number(depositValue.toString()) + Number(startingBalance.toString()) , "deposits gets accpeted")              // balance and depositValue are both BN, so I convert them to strings first in order to assert their equality, and then to Numbers.
     
     }),

      it("Should allow only the owner to withdraw funds", async() =>{
          try{
            await  wallet.transfer(accounts[2], web3.utils.toWei("5", "ether"),{from: accounts[1]});
          }
          catch (e) {
            assert(e.message.includes("Only the owner can invoke this fn."));
            return;
          }
          assert(false);
           
       

     })
    })



