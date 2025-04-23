// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import {IERC20} from "openzeppelin-contracts/token/ERC20/IERC20.sol";
import {Ownable} from "openzeppelin-contracts/access/Ownable.sol";

interface IBGLD is IERC20 {
    function mint(address _to, uint256 _amount) external;
    function burn(address _from, uint256 _amount) external;
}

contract BridgeBase is  Ownable {
    event Burn(address indexed burner, uint256 amount);

    address public tokenAddress;
    mapping(address => uint256) public pendingBalance;

    constructor(address _tokenAddress) Ownable(msg.sender) {
        tokenAddress = _tokenAddress;
    }

    function burn(uint256 _amount) public {
        IBGLD token = IBGLD(tokenAddress);

        require(
            pendingBalance[msg.sender] >= _amount,
            "Not enough pending balance"
        );
        pendingBalance[msg.sender] -= _amount;

        token.burn(msg.sender, _amount);
        emit Burn(msg.sender, _amount);
    }

    function burnedOnOppositeChain(
        address userAccount,
        uint256 _amount
    ) public onlyOwner {
        pendingBalance[userAccount] += _amount;
    }
}
