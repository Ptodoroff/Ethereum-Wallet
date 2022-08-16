pragma solidity 0.8.15;

contract Wallet {


    function deposit () external payable {

    }

    function transfer (address payable _to, uint _amount) external {
        _to.transfer(_amount);
    }






}