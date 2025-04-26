// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import {ERC20} from "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "openzeppelin-contracts/contracts/access/Ownable.sol";

contract WGLDContract  is ERC20, Ownable {
    constructor(
        uint256 initialSupply
    ) ERC20("WGold", "WGLD") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }
}
