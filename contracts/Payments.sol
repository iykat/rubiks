// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DecentralizedPayment is Ownable {
    IERC20 public token;

    event Deposit(address indexed user, uint256 amount);
    event Transfer(address indexed from, address indexed to, uint256 amount);

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    function deposit(uint256 amount) public {
        require(amount > 0, "Amount must be greater than 0");
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        emit Deposit(msg.sender, amount);
    }

    function transfer(address to, uint256 amount) public {
        require(to != address(0), "Invalid recipient address");
        require(token.transfer(to, amount), "Transfer failed");
        emit Transfer(msg.sender, to, amount);
    }

    function getBalance() public view returns (uint256) {
        return token.balanceOf(msg.sender);
    }

    function withdraw(uint256 amount) public onlyOwner {
        require(token.transfer(owner(), amount), "Transfer failed");
    }
}
