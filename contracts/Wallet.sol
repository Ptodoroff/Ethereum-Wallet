pragma solidity 0.8.15;

contract Wallet {

    address owner;


  constructor () {
    owner = msg.sender;
  }
    modifier onlyOwner {
        require (msg.sender ==owner, "Only the owner can invoke this fn.");
        _;
    }

    function deposit () external payable {

    }

    function transfer (address payable _to, uint _amount) external onlyOwner {
        _to.transfer(_amount);

    }

    function walletBalance () public view returns (uint) {
        return address(this).balance;
    }





}