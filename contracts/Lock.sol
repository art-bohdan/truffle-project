// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lock {
  uint256 public counter;

  function foo() external {
    revert("here revert foo function");
  }

  function boo() external {
    revert("here revert boo function");
  }

  function moo() external view {
    revert("here revert moo function");
  }

  function _getRevertMsg(bytes memory _returnData)
    public
    pure
    returns (string memory)
  {
    // If the _res length is less than 68, then the transaction failed silently (without a revert message)
    if (_returnData.length < 68) return "Transaction reverted silently";

    assembly {
      // Slice the sighash.
      _returnData := add(_returnData, 0x04)
    }
    return abi.decode(_returnData, (string)); // All that remains is the revert string
  }
}
