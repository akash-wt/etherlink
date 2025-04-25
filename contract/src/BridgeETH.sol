// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import {IERC20} from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "openzeppelin-contracts/contracts/access/Ownable.sol";

contract BridgeETH is Ownable {
    event Deposit(address indexed depositor, uint256 amount);

    address public tokenAddress;
    mapping(address => uint256) public pendingBalance;

    constructor(address _tokenAddress) Ownable(msg.sender) {
        tokenAddress = _tokenAddress;
    }

    function deposite(uint256 _amount) public {
        IERC20 token = IERC20(tokenAddress);

        require(
            token.allowance(msg.sender, address(this)) >= _amount,
            "Allowance too low"
        );
        require(
            token.transferFrom(msg.sender, address(this), _amount),
            "Transfer failed"
        );

        emit Deposit(msg.sender, _amount);
    }

    function withdraw(uint256 _amount) public {
        IERC20 token = IERC20(tokenAddress);
        require(
            pendingBalance[msg.sender] >= _amount,
            "Insufficient pending balance"
        );
        require(
            token.balanceOf(address(this)) >= _amount,
            "Insufficient contract balance"
        );

        pendingBalance[msg.sender] -= _amount;
        require(token.transfer(msg.sender, _amount), "Transfer failed");
    }

    function burnedOnOppositeChain(
        address userAccount,
        uint256 _amount
    ) public onlyOwner {
        pendingBalance[userAccount] += _amount;
    }
}
