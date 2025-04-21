// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;
import "openzeppelin-contracts/token/ERC20/ERC20.sol";

contract Contract is ERC20 {
    constructor() ERC20("Contract", "CT") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
