export const ABI = [
  {
    "abi": [
      {
        "type": "constructor",
        "inputs": [
          {
            "name": "_tokenAddress",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "burnedOnOppositeChain",
        "inputs": [
          { "name": "userAccount", "type": "address", "internalType": "address" },
          { "name": "_amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "deposite",
        "inputs": [
          { "name": "_amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "pendingBalance",
        "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "tokenAddress",
        "inputs": [],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
          { "name": "newOwner", "type": "address", "internalType": "address" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "withdraw",
        "inputs": [
          { "name": "_amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "event",
        "name": "Deposit",
        "inputs": [
          {
            "name": "depositor",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
          {
            "name": "previousOwner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "newOwner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          }
        ],
        "anonymous": false
      },
      {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
          { "name": "owner", "type": "address", "internalType": "address" }
        ]
      },
      {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
          { "name": "account", "type": "address", "internalType": "address" }
        ]
      }
    ],
    "bytecode": {
      "object": "0x608060405234801561000f575f5ffd5b50604051610ffc380380610ffc83398181016040528101906100319190610217565b335f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610251565b60405180910390fd5b6100b1816100f860201b60201c565b508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061026a565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101e6826101bd565b9050919050565b6101f6816101dc565b8114610200575f5ffd5b50565b5f81519050610211816101ed565b92915050565b5f6020828403121561022c5761022b6101b9565b5b5f61023984828501610203565b91505092915050565b61024b816101dc565b82525050565b5f6020820190506102645f830184610242565b92915050565b610d85806102775f395ff3fe608060405234801561000f575f5ffd5b5060043610610086575f3560e01c8063715018a611610059578063715018a61461010e5780638da5cb5b146101185780639d76ea5814610136578063f2fde38b1461015457610086565b80632e1a7d4d1461008a5780633104562b146100a65780633736f85d146100c25780636cb08859146100f2575b5f5ffd5b6100a4600480360381019061009f91906108ac565b610170565b005b6100c060048036038101906100bb91906108ac565b6103e0565b005b6100dc60048036038101906100d79190610931565b6105cf565b6040516100e9919061096b565b60405180910390f35b61010c60048036038101906101079190610984565b6105e4565b005b610116610643565b005b610120610656565b60405161012d91906109d1565b60405180910390f35b61013e61067d565b60405161014b91906109d1565b60405180910390f35b61016e60048036038101906101699190610931565b6106a2565b005b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610215576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020c90610a44565b60405180910390fd5b818173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161024f91906109d1565b602060405180830381865afa15801561026a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061028e9190610a76565b10156102cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c690610aeb565b60405180910390fd5b8160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461031b9190610b36565b925050819055508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b815260040161035d929190610b69565b6020604051808303815f875af1158015610379573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061039d9190610bc5565b6103dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d390610c3a565b60405180910390fd5b5050565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401610441929190610c58565b602060405180830381865afa15801561045c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104809190610a76565b10156104c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b890610cc9565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016104fe93929190610ce7565b6020604051808303815f875af115801561051a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061053e9190610bc5565b61057d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057490610c3a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c836040516105c3919061096b565b60405180910390a25050565b6002602052805f5260405f205f915090505481565b6105ec610726565b8060025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546106389190610d1c565b925050819055505050565b61064b610726565b6106545f6107ad565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6106aa610726565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361071a575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161071191906109d1565b60405180910390fd5b610723816107ad565b50565b61072e61086e565b73ffffffffffffffffffffffffffffffffffffffff1661074c610656565b73ffffffffffffffffffffffffffffffffffffffff16146107ab5761076f61086e565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016107a291906109d1565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f5ffd5b5f819050919050565b61088b81610879565b8114610895575f5ffd5b50565b5f813590506108a681610882565b92915050565b5f602082840312156108c1576108c0610875565b5b5f6108ce84828501610898565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610900826108d7565b9050919050565b610910816108f6565b811461091a575f5ffd5b50565b5f8135905061092b81610907565b92915050565b5f6020828403121561094657610945610875565b5b5f6109538482850161091d565b91505092915050565b61096581610879565b82525050565b5f60208201905061097e5f83018461095c565b92915050565b5f5f6040838503121561099a57610999610875565b5b5f6109a78582860161091d565b92505060206109b885828601610898565b9150509250929050565b6109cb816108f6565b82525050565b5f6020820190506109e45f8301846109c2565b92915050565b5f82825260208201905092915050565b7f496e73756666696369656e742070656e64696e672062616c616e6365000000005f82015250565b5f610a2e601c836109ea565b9150610a39826109fa565b602082019050919050565b5f6020820190508181035f830152610a5b81610a22565b9050919050565b5f81519050610a7081610882565b92915050565b5f60208284031215610a8b57610a8a610875565b5b5f610a9884828501610a62565b91505092915050565b7f496e73756666696369656e7420636f6e74726163742062616c616e63650000005f82015250565b5f610ad5601d836109ea565b9150610ae082610aa1565b602082019050919050565b5f6020820190508181035f830152610b0281610ac9565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610b4082610879565b9150610b4b83610879565b9250828203905081811115610b6357610b62610b09565b5b92915050565b5f604082019050610b7c5f8301856109c2565b610b89602083018461095c565b9392505050565b5f8115159050919050565b610ba481610b90565b8114610bae575f5ffd5b50565b5f81519050610bbf81610b9b565b92915050565b5f60208284031215610bda57610bd9610875565b5b5f610be784828501610bb1565b91505092915050565b7f5472616e73666572206661696c656400000000000000000000000000000000005f82015250565b5f610c24600f836109ea565b9150610c2f82610bf0565b602082019050919050565b5f6020820190508181035f830152610c5181610c18565b9050919050565b5f604082019050610c6b5f8301856109c2565b610c7860208301846109c2565b9392505050565b7f416c6c6f77616e636520746f6f206c6f770000000000000000000000000000005f82015250565b5f610cb36011836109ea565b9150610cbe82610c7f565b602082019050919050565b5f6020820190508181035f830152610ce081610ca7565b9050919050565b5f606082019050610cfa5f8301866109c2565b610d0760208301856109c2565b610d14604083018461095c565b949350505050565b5f610d2682610879565b9150610d3183610879565b9250828201905080821115610d4957610d48610b09565b5b9291505056fea26469706673582212207bc4c159de4879191bfd31d9fdb1844ba39a35eea736e44119175301f9c20dea64736f6c634300081d0033",
      "sourceMap": "222:1327:11:-:0;;;410:100;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;453:10;1297:1:4;1273:26;;:12;:26;;;1269:95;;1350:1;1322:31;;;;;;;;;;;:::i;:::-;;;;;;;;1269:95;1373:32;1392:12;1373:18;;;:32;;:::i;:::-;1225:187;490:13:11::1;475:12;;:28;;;;;;;;;;;;;;;;;;410:100:::0;222:1327;;2912:187:4;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;88:117:15:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:351::-;915:6;964:2;952:9;943:7;939:23;935:32;932:119;;;970:79;;:::i;:::-;932:119;1090:1;1115:64;1171:7;1162:6;1151:9;1147:22;1115:64;:::i;:::-;1105:74;;1061:128;845:351;;;;:::o;1202:118::-;1289:24;1307:5;1289:24;:::i;:::-;1284:3;1277:37;1202:118;;:::o;1326:222::-;1419:4;1457:2;1446:9;1442:18;1434:26;;1470:71;1538:1;1527:9;1523:17;1514:6;1470:71;:::i;:::-;1326:222;;;;:::o;222:1327:11:-;;;;;;;",
      "linkReferences": {}
    },
    "deployedBytecode": {
      "object": "0x608060405234801561000f575f5ffd5b5060043610610086575f3560e01c8063715018a611610059578063715018a61461010e5780638da5cb5b146101185780639d76ea5814610136578063f2fde38b1461015457610086565b80632e1a7d4d1461008a5780633104562b146100a65780633736f85d146100c25780636cb08859146100f2575b5f5ffd5b6100a4600480360381019061009f91906108ac565b610170565b005b6100c060048036038101906100bb91906108ac565b6103e0565b005b6100dc60048036038101906100d79190610931565b6105cf565b6040516100e9919061096b565b60405180910390f35b61010c60048036038101906101079190610984565b6105e4565b005b610116610643565b005b610120610656565b60405161012d91906109d1565b60405180910390f35b61013e61067d565b60405161014b91906109d1565b60405180910390f35b61016e60048036038101906101699190610931565b6106a2565b005b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610215576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020c90610a44565b60405180910390fd5b818173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161024f91906109d1565b602060405180830381865afa15801561026a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061028e9190610a76565b10156102cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c690610aeb565b60405180910390fd5b8160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461031b9190610b36565b925050819055508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b815260040161035d929190610b69565b6020604051808303815f875af1158015610379573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061039d9190610bc5565b6103dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d390610c3a565b60405180910390fd5b5050565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050818173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401610441929190610c58565b602060405180830381865afa15801561045c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104809190610a76565b10156104c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b890610cc9565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016104fe93929190610ce7565b6020604051808303815f875af115801561051a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061053e9190610bc5565b61057d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057490610c3a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c836040516105c3919061096b565b60405180910390a25050565b6002602052805f5260405f205f915090505481565b6105ec610726565b8060025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546106389190610d1c565b925050819055505050565b61064b610726565b6106545f6107ad565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6106aa610726565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361071a575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161071191906109d1565b60405180910390fd5b610723816107ad565b50565b61072e61086e565b73ffffffffffffffffffffffffffffffffffffffff1661074c610656565b73ffffffffffffffffffffffffffffffffffffffff16146107ab5761076f61086e565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016107a291906109d1565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f5ffd5b5f819050919050565b61088b81610879565b8114610895575f5ffd5b50565b5f813590506108a681610882565b92915050565b5f602082840312156108c1576108c0610875565b5b5f6108ce84828501610898565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610900826108d7565b9050919050565b610910816108f6565b811461091a575f5ffd5b50565b5f8135905061092b81610907565b92915050565b5f6020828403121561094657610945610875565b5b5f6109538482850161091d565b91505092915050565b61096581610879565b82525050565b5f60208201905061097e5f83018461095c565b92915050565b5f5f6040838503121561099a57610999610875565b5b5f6109a78582860161091d565b92505060206109b885828601610898565b9150509250929050565b6109cb816108f6565b82525050565b5f6020820190506109e45f8301846109c2565b92915050565b5f82825260208201905092915050565b7f496e73756666696369656e742070656e64696e672062616c616e6365000000005f82015250565b5f610a2e601c836109ea565b9150610a39826109fa565b602082019050919050565b5f6020820190508181035f830152610a5b81610a22565b9050919050565b5f81519050610a7081610882565b92915050565b5f60208284031215610a8b57610a8a610875565b5b5f610a9884828501610a62565b91505092915050565b7f496e73756666696369656e7420636f6e74726163742062616c616e63650000005f82015250565b5f610ad5601d836109ea565b9150610ae082610aa1565b602082019050919050565b5f6020820190508181035f830152610b0281610ac9565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610b4082610879565b9150610b4b83610879565b9250828203905081811115610b6357610b62610b09565b5b92915050565b5f604082019050610b7c5f8301856109c2565b610b89602083018461095c565b9392505050565b5f8115159050919050565b610ba481610b90565b8114610bae575f5ffd5b50565b5f81519050610bbf81610b9b565b92915050565b5f60208284031215610bda57610bd9610875565b5b5f610be784828501610bb1565b91505092915050565b7f5472616e73666572206661696c656400000000000000000000000000000000005f82015250565b5f610c24600f836109ea565b9150610c2f82610bf0565b602082019050919050565b5f6020820190508181035f830152610c5181610c18565b9050919050565b5f604082019050610c6b5f8301856109c2565b610c7860208301846109c2565b9392505050565b7f416c6c6f77616e636520746f6f206c6f770000000000000000000000000000005f82015250565b5f610cb36011836109ea565b9150610cbe82610c7f565b602082019050919050565b5f6020820190508181035f830152610ce081610ca7565b9050919050565b5f606082019050610cfa5f8301866109c2565b610d0760208301856109c2565b610d14604083018461095c565b949350505050565b5f610d2682610879565b9150610d3183610879565b9250828201905080821115610d4957610d48610b09565b5b9291505056fea26469706673582212207bc4c159de4879191bfd31d9fdb1844ba39a35eea736e44119175301f9c20dea64736f6c634300081d0033",
      "sourceMap": "222:1327:11:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;914:464;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;516:392;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;354:49;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1384:163;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2293:101:4;;;:::i;:::-;;1638:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;321:27:11;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2543:215:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;914:464:11;966:12;988;;;;;;;;;;;966:35;;1062:7;1032:14;:26;1047:10;1032:26;;;;;;;;;;;;;;;;:37;;1011:112;;;;;;;;;;;;:::i;:::-;;;;;;;;;1188:7;1154:5;:15;;;1178:4;1154:30;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:41;;1133:117;;;;;;;;;;;;:::i;:::-;;;;;;;;;1291:7;1261:14;:26;1276:10;1261:26;;;;;;;;;;;;;;;;:37;;;;;;;:::i;:::-;;;;;;;;1316:5;:14;;;1331:10;1343:7;1316:35;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1308:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;956:422;914:464;:::o;516:392::-;568:12;590;;;;;;;;;;;568:35;;681:7;635:5;:15;;;651:10;671:4;635:42;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:53;;614:117;;;;;;;;;;;;:::i;:::-;;;;;;;;;762:5;:18;;;781:10;801:4;808:7;762:54;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;741:116;;;;;;;;;;;;:::i;:::-;;;;;;;;;881:10;873:28;;;893:7;873:28;;;;;;:::i;:::-;;;;;;;;558:350;516:392;:::o;354:49::-;;;;;;;;;;;;;;;;;:::o;1384:163::-;1531:13:4;:11;:13::i;:::-;1533:7:11::1;1502:14;:27;1517:11;1502:27;;;;;;;;;;;;;;;;:38;;;;;;;:::i;:::-;;;;;;;;1384:163:::0;;:::o;2293:101:4:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;1638:85::-;1684:7;1710:6;;;;;;;;;;;1703:13;;1638:85;:::o;321:27:11:-;;;;;;;;;;;;;:::o;2543:215:4:-;1531:13;:11;:13::i;:::-;2647:1:::1;2627:22;;:8;:22;;::::0;2623:91:::1;;2700:1;2672:31;;;;;;;;;;;:::i;:::-;;;;;;;;2623:91;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;1796:162::-;1866:12;:10;:12::i;:::-;1855:23;;:7;:5;:7::i;:::-;:23;;;1851:101;;1928:12;:10;:12::i;:::-;1901:40;;;;;;;;;;;:::i;:::-;;;;;;;;1851:101;1796:162::o;2912:187::-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;656:96:9:-;709:7;735:10;728:17;;656:96;:::o;88:117:15:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:126::-;1062:7;1102:42;1095:5;1091:54;1080:65;;1025:126;;;:::o;1157:96::-;1194:7;1223:24;1241:5;1223:24;:::i;:::-;1212:35;;1157:96;;;:::o;1259:122::-;1332:24;1350:5;1332:24;:::i;:::-;1325:5;1322:35;1312:63;;1371:1;1368;1361:12;1312:63;1259:122;:::o;1387:139::-;1433:5;1471:6;1458:20;1449:29;;1487:33;1514:5;1487:33;:::i;:::-;1387:139;;;;:::o;1532:329::-;1591:6;1640:2;1628:9;1619:7;1615:23;1611:32;1608:119;;;1646:79;;:::i;:::-;1608:119;1766:1;1791:53;1836:7;1827:6;1816:9;1812:22;1791:53;:::i;:::-;1781:63;;1737:117;1532:329;;;;:::o;1867:118::-;1954:24;1972:5;1954:24;:::i;:::-;1949:3;1942:37;1867:118;;:::o;1991:222::-;2084:4;2122:2;2111:9;2107:18;2099:26;;2135:71;2203:1;2192:9;2188:17;2179:6;2135:71;:::i;:::-;1991:222;;;;:::o;2219:474::-;2287:6;2295;2344:2;2332:9;2323:7;2319:23;2315:32;2312:119;;;2350:79;;:::i;:::-;2312:119;2470:1;2495:53;2540:7;2531:6;2520:9;2516:22;2495:53;:::i;:::-;2485:63;;2441:117;2597:2;2623:53;2668:7;2659:6;2648:9;2644:22;2623:53;:::i;:::-;2613:63;;2568:118;2219:474;;;;;:::o;2699:118::-;2786:24;2804:5;2786:24;:::i;:::-;2781:3;2774:37;2699:118;;:::o;2823:222::-;2916:4;2954:2;2943:9;2939:18;2931:26;;2967:71;3035:1;3024:9;3020:17;3011:6;2967:71;:::i;:::-;2823:222;;;;:::o;3051:169::-;3135:11;3169:6;3164:3;3157:19;3209:4;3204:3;3200:14;3185:29;;3051:169;;;;:::o;3226:178::-;3366:30;3362:1;3354:6;3350:14;3343:54;3226:178;:::o;3410:366::-;3552:3;3573:67;3637:2;3632:3;3573:67;:::i;:::-;3566:74;;3649:93;3738:3;3649:93;:::i;:::-;3767:2;3762:3;3758:12;3751:19;;3410:366;;;:::o;3782:419::-;3948:4;3986:2;3975:9;3971:18;3963:26;;4035:9;4029:4;4025:20;4021:1;4010:9;4006:17;3999:47;4063:131;4189:4;4063:131;:::i;:::-;4055:139;;3782:419;;;:::o;4207:143::-;4264:5;4295:6;4289:13;4280:22;;4311:33;4338:5;4311:33;:::i;:::-;4207:143;;;;:::o;4356:351::-;4426:6;4475:2;4463:9;4454:7;4450:23;4446:32;4443:119;;;4481:79;;:::i;:::-;4443:119;4601:1;4626:64;4682:7;4673:6;4662:9;4658:22;4626:64;:::i;:::-;4616:74;;4572:128;4356:351;;;;:::o;4713:179::-;4853:31;4849:1;4841:6;4837:14;4830:55;4713:179;:::o;4898:366::-;5040:3;5061:67;5125:2;5120:3;5061:67;:::i;:::-;5054:74;;5137:93;5226:3;5137:93;:::i;:::-;5255:2;5250:3;5246:12;5239:19;;4898:366;;;:::o;5270:419::-;5436:4;5474:2;5463:9;5459:18;5451:26;;5523:9;5517:4;5513:20;5509:1;5498:9;5494:17;5487:47;5551:131;5677:4;5551:131;:::i;:::-;5543:139;;5270:419;;;:::o;5695:180::-;5743:77;5740:1;5733:88;5840:4;5837:1;5830:15;5864:4;5861:1;5854:15;5881:194;5921:4;5941:20;5959:1;5941:20;:::i;:::-;5936:25;;5975:20;5993:1;5975:20;:::i;:::-;5970:25;;6019:1;6016;6012:9;6004:17;;6043:1;6037:4;6034:11;6031:37;;;6048:18;;:::i;:::-;6031:37;5881:194;;;;:::o;6081:332::-;6202:4;6240:2;6229:9;6225:18;6217:26;;6253:71;6321:1;6310:9;6306:17;6297:6;6253:71;:::i;:::-;6334:72;6402:2;6391:9;6387:18;6378:6;6334:72;:::i;:::-;6081:332;;;;;:::o;6419:90::-;6453:7;6496:5;6489:13;6482:21;6471:32;;6419:90;;;:::o;6515:116::-;6585:21;6600:5;6585:21;:::i;:::-;6578:5;6575:32;6565:60;;6621:1;6618;6611:12;6565:60;6515:116;:::o;6637:137::-;6691:5;6722:6;6716:13;6707:22;;6738:30;6762:5;6738:30;:::i;:::-;6637:137;;;;:::o;6780:345::-;6847:6;6896:2;6884:9;6875:7;6871:23;6867:32;6864:119;;;6902:79;;:::i;:::-;6864:119;7022:1;7047:61;7100:7;7091:6;7080:9;7076:22;7047:61;:::i;:::-;7037:71;;6993:125;6780:345;;;;:::o;7131:165::-;7271:17;7267:1;7259:6;7255:14;7248:41;7131:165;:::o;7302:366::-;7444:3;7465:67;7529:2;7524:3;7465:67;:::i;:::-;7458:74;;7541:93;7630:3;7541:93;:::i;:::-;7659:2;7654:3;7650:12;7643:19;;7302:366;;;:::o;7674:419::-;7840:4;7878:2;7867:9;7863:18;7855:26;;7927:9;7921:4;7917:20;7913:1;7902:9;7898:17;7891:47;7955:131;8081:4;7955:131;:::i;:::-;7947:139;;7674:419;;;:::o;8099:332::-;8220:4;8258:2;8247:9;8243:18;8235:26;;8271:71;8339:1;8328:9;8324:17;8315:6;8271:71;:::i;:::-;8352:72;8420:2;8409:9;8405:18;8396:6;8352:72;:::i;:::-;8099:332;;;;;:::o;8437:167::-;8577:19;8573:1;8565:6;8561:14;8554:43;8437:167;:::o;8610:366::-;8752:3;8773:67;8837:2;8832:3;8773:67;:::i;:::-;8766:74;;8849:93;8938:3;8849:93;:::i;:::-;8967:2;8962:3;8958:12;8951:19;;8610:366;;;:::o;8982:419::-;9148:4;9186:2;9175:9;9171:18;9163:26;;9235:9;9229:4;9225:20;9221:1;9210:9;9206:17;9199:47;9263:131;9389:4;9263:131;:::i;:::-;9255:139;;8982:419;;;:::o;9407:442::-;9556:4;9594:2;9583:9;9579:18;9571:26;;9607:71;9675:1;9664:9;9660:17;9651:6;9607:71;:::i;:::-;9688:72;9756:2;9745:9;9741:18;9732:6;9688:72;:::i;:::-;9770;9838:2;9827:9;9823:18;9814:6;9770:72;:::i;:::-;9407:442;;;;;;:::o;9855:191::-;9895:3;9914:20;9932:1;9914:20;:::i;:::-;9909:25;;9948:20;9966:1;9948:20;:::i;:::-;9943:25;;9991:1;9988;9984:9;9977:16;;10012:3;10009:1;10006:10;10003:36;;;10019:18;;:::i;:::-;10003:36;9855:191;;;;:::o",
      "linkReferences": {}
    },
    "methodIdentifiers": {
      "burnedOnOppositeChain(address,uint256)": "6cb08859",
      "deposite(uint256)": "3104562b",
      "owner()": "8da5cb5b",
      "pendingBalance(address)": "3736f85d",
      "renounceOwnership()": "715018a6",
      "tokenAddress()": "9d76ea58",
      "transferOwnership(address)": "f2fde38b",
      "withdraw(uint256)": "2e1a7d4d"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.29+commit.ab55807c\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"depositor\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAccount\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"burnedOnOppositeChain\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"deposite\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"pendingBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/BridgeETH.sol\":\"BridgeETH\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db\",\"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"src/BridgeETH.sol\":{\"keccak256\":\"0xbab38d81e29467cd2bd2db3ab53f5a1b1e7d411dd5211478f4cb7c26b34afca6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://b7fdb8b385161d187b88889548fcdd885d4f27b9e1eae52dd32fd7ca0d66f82c\",\"dweb:/ipfs/QmaSgUjMkvMQQNF21ZxnqLtNeVbbH4Dq6d8jyUZE72aFR3\"]}},\"version\":1}",
    "metadata": {
      "compiler": { "version": "0.8.29+commit.ab55807c" },
      "language": "Solidity",
      "output": {
        "abi": [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [
              { "internalType": "address", "name": "owner", "type": "address" }
            ],
            "type": "error",
            "name": "OwnableInvalidOwner"
          },
          {
            "inputs": [
              { "internalType": "address", "name": "account", "type": "address" }
            ],
            "type": "error",
            "name": "OwnableUnauthorizedAccount"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "depositor",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256",
                "indexed": false
              }
            ],
            "type": "event",
            "name": "Deposit",
            "anonymous": false
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "previousOwner",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "address",
                "name": "newOwner",
                "type": "address",
                "indexed": true
              }
            ],
            "type": "event",
            "name": "OwnershipTransferred",
            "anonymous": false
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "userAccount",
                "type": "address"
              },
              { "internalType": "uint256", "name": "_amount", "type": "uint256" }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "burnedOnOppositeChain"
          },
          {
            "inputs": [
              { "internalType": "uint256", "name": "_amount", "type": "uint256" }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "deposite"
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "owner",
            "outputs": [
              { "internalType": "address", "name": "", "type": "address" }
            ]
          },
          {
            "inputs": [
              { "internalType": "address", "name": "", "type": "address" }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "pendingBalance",
            "outputs": [
              { "internalType": "uint256", "name": "", "type": "uint256" }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "renounceOwnership"
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "tokenAddress",
            "outputs": [
              { "internalType": "address", "name": "", "type": "address" }
            ]
          },
          {
            "inputs": [
              { "internalType": "address", "name": "newOwner", "type": "address" }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "transferOwnership"
          },
          {
            "inputs": [
              { "internalType": "uint256", "name": "_amount", "type": "uint256" }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "withdraw"
          }
        ],
        "devdoc": {
          "kind": "dev",
          "methods": {
            "owner()": { "details": "Returns the address of the current owner." },
            "renounceOwnership()": {
              "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
            },
            "transferOwnership(address)": {
              "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
            }
          },
          "version": 1
        },
        "userdoc": { "kind": "user", "methods": {}, "version": 1 }
      },
      "settings": {
        "remappings": [
          "ds-test/=lib/forge-std/lib/ds-test/src/",
          "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
          "forge-std/=lib/forge-std/src/",
          "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
          "openzeppelin-contracts/=lib/openzeppelin-contracts/"
        ],
        "optimizer": { "enabled": false, "runs": 200 },
        "metadata": { "bytecodeHash": "ipfs" },
        "compilationTarget": { "src/BridgeETH.sol": "BridgeETH" },
        "evmVersion": "cancun",
        "libraries": {}
      },
      "sources": {
        "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
          "keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
          "urls": [
            "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
            "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
          "keccak256": "0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7",
          "urls": [
            "bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db",
            "dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"
          ],
          "license": "MIT"
        },
        "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
          "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
          "urls": [
            "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
            "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
          ],
          "license": "MIT"
        },
        "src/BridgeETH.sol": {
          "keccak256": "0xbab38d81e29467cd2bd2db3ab53f5a1b1e7d411dd5211478f4cb7c26b34afca6",
          "urls": [
            "bzz-raw://b7fdb8b385161d187b88889548fcdd885d4f27b9e1eae52dd32fd7ca0d66f82c",
            "dweb:/ipfs/QmaSgUjMkvMQQNF21ZxnqLtNeVbbH4Dq6d8jyUZE72aFR3"
          ],
          "license": "Unlicense"
        }
      },
      "version": 1
    },
    "id": 11
  }

];

export const ABI2 = [{
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_tokenAddress",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "burn",
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "burnedOnOppositeChain",
      "inputs": [
        {
          "name": "userAccount",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "pendingBalance",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "tokenAddress",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Burn",
      "inputs": [
        {
          "name": "burner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561000f575f5ffd5b50604051610af5380380610af583398181016040528101906100319190610217565b335f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610251565b60405180910390fd5b6100b1816100f860201b60201c565b508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061026a565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101e6826101bd565b9050919050565b6101f6816101dc565b8114610200575f5ffd5b50565b5f81519050610211816101ed565b92915050565b5f6020828403121561022c5761022b6101b9565b5b5f61023984828501610203565b91505092915050565b61024b816101dc565b82525050565b5f6020820190506102645f830184610242565b92915050565b61087e806102775f395ff3fe608060405234801561000f575f5ffd5b506004361061007b575f3560e01c8063715018a611610059578063715018a6146100e75780638da5cb5b146100f15780639d76ea581461010f578063f2fde38b1461012d5761007b565b80633736f85d1461007f57806342966c68146100af5780636cb08859146100cb575b5f5ffd5b610099600480360381019061009491906105ff565b610149565b6040516100a69190610642565b60405180910390f35b6100c960048036038101906100c49190610685565b61015e565b005b6100e560048036038101906100e091906106b0565b610310565b005b6100ef61036f565b005b6100f9610382565b60405161010691906106fd565b60405180910390f35b6101176103a9565b60405161012491906106fd565b60405180910390f35b610147600480360381019061014291906105ff565b6103ce565b005b6002602052805f5260405f205f915090505481565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610203576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101fa90610770565b60405180910390fd5b8160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461024f91906107bb565b925050819055508073ffffffffffffffffffffffffffffffffffffffff16639dc29fac33846040518363ffffffff1660e01b81526004016102919291906107ee565b5f604051808303815f87803b1580156102a8575f5ffd5b505af11580156102ba573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040516103049190610642565b60405180910390a25050565b610318610452565b8060025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546103649190610815565b925050819055505050565b610377610452565b6103805f6104d9565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103d6610452565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610446575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161043d91906106fd565b60405180910390fd5b61044f816104d9565b50565b61045a61059a565b73ffffffffffffffffffffffffffffffffffffffff16610478610382565b73ffffffffffffffffffffffffffffffffffffffff16146104d75761049b61059a565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016104ce91906106fd565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6105ce826105a5565b9050919050565b6105de816105c4565b81146105e8575f5ffd5b50565b5f813590506105f9816105d5565b92915050565b5f60208284031215610614576106136105a1565b5b5f610621848285016105eb565b91505092915050565b5f819050919050565b61063c8161062a565b82525050565b5f6020820190506106555f830184610633565b92915050565b6106648161062a565b811461066e575f5ffd5b50565b5f8135905061067f8161065b565b92915050565b5f6020828403121561069a576106996105a1565b5b5f6106a784828501610671565b91505092915050565b5f5f604083850312156106c6576106c56105a1565b5b5f6106d3858286016105eb565b92505060206106e485828601610671565b9150509250929050565b6106f7816105c4565b82525050565b5f6020820190506107105f8301846106ee565b92915050565b5f82825260208201905092915050565b7f4e6f7420656e6f7567682070656e64696e672062616c616e63650000000000005f82015250565b5f61075a601a83610716565b915061076582610726565b602082019050919050565b5f6020820190508181035f8301526107878161074e565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6107c58261062a565b91506107d08361062a565b92508282039050818111156107e8576107e761078e565b5b92915050565b5f6040820190506108015f8301856106ee565b61080e6020830184610633565b9392505050565b5f61081f8261062a565b915061082a8361062a565b92508282019050808211156108425761084161078e565b5b9291505056fea264697066735822122028486cb10246a60bd57f0ae7a4118eb53399e0bb2ebcf9787197f8916b8f72c464736f6c634300081d0033",
    "sourceMap": "371:799:10:-:0;;;555:100;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;598:10;1297:1:4;1273:26;;:12;:26;;;1269:95;;1350:1;1322:31;;;;;;;;;;;:::i;:::-;;;;;;;;1269:95;1373:32;1392:12;1373:18;;;:32;;:::i;:::-;1225:187;635:13:10::1;620:12;;:28;;;;;;;;;;;;;;;;;;555:100:::0;371:799;;2912:187:4;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;88:117:15:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:351::-;915:6;964:2;952:9;943:7;939:23;935:32;932:119;;;970:79;;:::i;:::-;932:119;1090:1;1115:64;1171:7;1162:6;1151:9;1147:22;1115:64;:::i;:::-;1105:74;;1061:128;845:351;;;;:::o;1202:118::-;1289:24;1307:5;1289:24;:::i;:::-;1284:3;1277:37;1202:118;;:::o;1326:222::-;1419:4;1457:2;1446:9;1442:18;1434:26;;1470:71;1538:1;1527:9;1523:17;1514:6;1470:71;:::i;:::-;1326:222;;;;:::o;371:799:10:-;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561000f575f5ffd5b506004361061007b575f3560e01c8063715018a611610059578063715018a6146100e75780638da5cb5b146100f15780639d76ea581461010f578063f2fde38b1461012d5761007b565b80633736f85d1461007f57806342966c68146100af5780636cb08859146100cb575b5f5ffd5b610099600480360381019061009491906105ff565b610149565b6040516100a69190610642565b60405180910390f35b6100c960048036038101906100c49190610685565b61015e565b005b6100e560048036038101906100e091906106b0565b610310565b005b6100ef61036f565b005b6100f9610382565b60405161010691906106fd565b60405180910390f35b6101176103a9565b60405161012491906106fd565b60405180910390f35b610147600480360381019061014291906105ff565b6103ce565b005b6002602052805f5260405f205f915090505481565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610203576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101fa90610770565b60405180910390fd5b8160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461024f91906107bb565b925050819055508073ffffffffffffffffffffffffffffffffffffffff16639dc29fac33846040518363ffffffff1660e01b81526004016102919291906107ee565b5f604051808303815f87803b1580156102a8575f5ffd5b505af11580156102ba573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040516103049190610642565b60405180910390a25050565b610318610452565b8060025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546103649190610815565b925050819055505050565b610377610452565b6103805f6104d9565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103d6610452565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610446575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161043d91906106fd565b60405180910390fd5b61044f816104d9565b50565b61045a61059a565b73ffffffffffffffffffffffffffffffffffffffff16610478610382565b73ffffffffffffffffffffffffffffffffffffffff16146104d75761049b61059a565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016104ce91906106fd565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6105ce826105a5565b9050919050565b6105de816105c4565b81146105e8575f5ffd5b50565b5f813590506105f9816105d5565b92915050565b5f60208284031215610614576106136105a1565b5b5f610621848285016105eb565b91505092915050565b5f819050919050565b61063c8161062a565b82525050565b5f6020820190506106555f830184610633565b92915050565b6106648161062a565b811461066e575f5ffd5b50565b5f8135905061067f8161065b565b92915050565b5f6020828403121561069a576106996105a1565b5b5f6106a784828501610671565b91505092915050565b5f5f604083850312156106c6576106c56105a1565b5b5f6106d3858286016105eb565b92505060206106e485828601610671565b9150509250929050565b6106f7816105c4565b82525050565b5f6020820190506107105f8301846106ee565b92915050565b5f82825260208201905092915050565b7f4e6f7420656e6f7567682070656e64696e672062616c616e63650000000000005f82015250565b5f61075a601a83610716565b915061076582610726565b602082019050919050565b5f6020820190508181035f8301526107878161074e565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6107c58261062a565b91506107d08361062a565b92508282039050818111156107e8576107e761078e565b5b92915050565b5f6040820190506108015f8301856106ee565b61080e6020830184610633565b9392505050565b5f61081f8261062a565b915061082a8361062a565b92508282019050808211156108425761084161078e565b5b9291505056fea264697066735822122028486cb10246a60bd57f0ae7a4118eb53399e0bb2ebcf9787197f8916b8f72c464736f6c634300081d0033",
    "sourceMap": "371:799:10:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;499:49;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;661:338;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1005:163;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2293:101:4;;;:::i;:::-;;1638:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;466:27:10;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2543:215:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;499:49:10;;;;;;;;;;;;;;;;;:::o;661:338::-;709:11;729:12;;;;;;;;;;;709:33;;804:7;774:14;:26;789:10;774:26;;;;;;;;;;;;;;;;:37;;753:110;;;;;;;;;;;;:::i;:::-;;;;;;;;;903:7;873:14;:26;888:10;873:26;;;;;;;;;;;;;;;;:37;;;;;;;:::i;:::-;;;;;;;;921:5;:10;;;932;944:7;921:31;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;972:10;967:25;;;984:7;967:25;;;;;;:::i;:::-;;;;;;;;699:300;661:338;:::o;1005:163::-;1531:13:4;:11;:13::i;:::-;1154:7:10::1;1123:14;:27;1138:11;1123:27;;;;;;;;;;;;;;;;:38;;;;;;;:::i;:::-;;;;;;;;1005:163:::0;;:::o;2293:101:4:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;1638:85::-;1684:7;1710:6;;;;;;;;;;;1703:13;;1638:85;:::o;466:27:10:-;;;;;;;;;;;;;:::o;2543:215:4:-;1531:13;:11;:13::i;:::-;2647:1:::1;2627:22;;:8;:22;;::::0;2623:91:::1;;2700:1;2672:31;;;;;;;;;;;:::i;:::-;;;;;;;;2623:91;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;1796:162::-;1866:12;:10;:12::i;:::-;1855:23;;:7;:5;:7::i;:::-;:23;;;1851:101;;1928:12;:10;:12::i;:::-;1901:40;;;;;;;;;;;:::i;:::-;;;;;;;;1851:101;1796:162::o;2912:187::-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;656:96:9:-;709:7;735:10;728:17;;656:96;:::o;88:117:15:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:139::-;742:5;780:6;767:20;758:29;;796:33;823:5;796:33;:::i;:::-;696:139;;;;:::o;841:329::-;900:6;949:2;937:9;928:7;924:23;920:32;917:119;;;955:79;;:::i;:::-;917:119;1075:1;1100:53;1145:7;1136:6;1125:9;1121:22;1100:53;:::i;:::-;1090:63;;1046:117;841:329;;;;:::o;1176:77::-;1213:7;1242:5;1231:16;;1176:77;;;:::o;1259:118::-;1346:24;1364:5;1346:24;:::i;:::-;1341:3;1334:37;1259:118;;:::o;1383:222::-;1476:4;1514:2;1503:9;1499:18;1491:26;;1527:71;1595:1;1584:9;1580:17;1571:6;1527:71;:::i;:::-;1383:222;;;;:::o;1611:122::-;1684:24;1702:5;1684:24;:::i;:::-;1677:5;1674:35;1664:63;;1723:1;1720;1713:12;1664:63;1611:122;:::o;1739:139::-;1785:5;1823:6;1810:20;1801:29;;1839:33;1866:5;1839:33;:::i;:::-;1739:139;;;;:::o;1884:329::-;1943:6;1992:2;1980:9;1971:7;1967:23;1963:32;1960:119;;;1998:79;;:::i;:::-;1960:119;2118:1;2143:53;2188:7;2179:6;2168:9;2164:22;2143:53;:::i;:::-;2133:63;;2089:117;1884:329;;;;:::o;2219:474::-;2287:6;2295;2344:2;2332:9;2323:7;2319:23;2315:32;2312:119;;;2350:79;;:::i;:::-;2312:119;2470:1;2495:53;2540:7;2531:6;2520:9;2516:22;2495:53;:::i;:::-;2485:63;;2441:117;2597:2;2623:53;2668:7;2659:6;2648:9;2644:22;2623:53;:::i;:::-;2613:63;;2568:118;2219:474;;;;;:::o;2699:118::-;2786:24;2804:5;2786:24;:::i;:::-;2781:3;2774:37;2699:118;;:::o;2823:222::-;2916:4;2954:2;2943:9;2939:18;2931:26;;2967:71;3035:1;3024:9;3020:17;3011:6;2967:71;:::i;:::-;2823:222;;;;:::o;3051:169::-;3135:11;3169:6;3164:3;3157:19;3209:4;3204:3;3200:14;3185:29;;3051:169;;;;:::o;3226:176::-;3366:28;3362:1;3354:6;3350:14;3343:52;3226:176;:::o;3408:366::-;3550:3;3571:67;3635:2;3630:3;3571:67;:::i;:::-;3564:74;;3647:93;3736:3;3647:93;:::i;:::-;3765:2;3760:3;3756:12;3749:19;;3408:366;;;:::o;3780:419::-;3946:4;3984:2;3973:9;3969:18;3961:26;;4033:9;4027:4;4023:20;4019:1;4008:9;4004:17;3997:47;4061:131;4187:4;4061:131;:::i;:::-;4053:139;;3780:419;;;:::o;4205:180::-;4253:77;4250:1;4243:88;4350:4;4347:1;4340:15;4374:4;4371:1;4364:15;4391:194;4431:4;4451:20;4469:1;4451:20;:::i;:::-;4446:25;;4485:20;4503:1;4485:20;:::i;:::-;4480:25;;4529:1;4526;4522:9;4514:17;;4553:1;4547:4;4544:11;4541:37;;;4558:18;;:::i;:::-;4541:37;4391:194;;;;:::o;4591:332::-;4712:4;4750:2;4739:9;4735:18;4727:26;;4763:71;4831:1;4820:9;4816:17;4807:6;4763:71;:::i;:::-;4844:72;4912:2;4901:9;4897:18;4888:6;4844:72;:::i;:::-;4591:332;;;;;:::o;4929:191::-;4969:3;4988:20;5006:1;4988:20;:::i;:::-;4983:25;;5022:20;5040:1;5022:20;:::i;:::-;5017:25;;5065:1;5062;5058:9;5051:16;;5086:3;5083:1;5080:10;5077:36;;;5093:18;;:::i;:::-;5077:36;4929:191;;;;:::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "burn(uint256)": "42966c68",
    "burnedOnOppositeChain(address,uint256)": "6cb08859",
    "owner()": "8da5cb5b",
    "pendingBalance(address)": "3736f85d",
    "renounceOwnership()": "715018a6",
    "tokenAddress()": "9d76ea58",
    "transferOwnership(address)": "f2fde38b"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.29+commit.ab55807c\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"burner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"userAccount\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"burnedOnOppositeChain\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"pendingBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/BridgeBase.sol\":\"BridgeBase\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db\",\"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"src/BridgeBase.sol\":{\"keccak256\":\"0x4593942c045e949c3748110804cace2984c0820dc2566752f7a76654e67039ba\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://d5c318acf0ab0d1c6cb36a8586da06d6d1be7d1be4dab48ab1982198c0381df7\",\"dweb:/ipfs/QmW6ASCk7xGQo2krY74hE1nB3tN9EeYxKHPW7k7qkDSLaM\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.29+commit.ab55807c"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_tokenAddress",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableInvalidOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableUnauthorizedAccount"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "burner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Burn",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "previousOwner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "burn"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "userAccount",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "burnedOnOppositeChain"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "pendingBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "tokenAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/"
      ],
      "optimizer": {
        "enabled": false,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/BridgeBase.sol": "BridgeBase"
      },
      "evmVersion": "cancun",
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
        "keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
        "urls": [
          "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
          "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7",
        "urls": [
          "bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db",
          "dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
      },
      "src/BridgeBase.sol": {
        "keccak256": "0x4593942c045e949c3748110804cace2984c0820dc2566752f7a76654e67039ba",
        "urls": [
          "bzz-raw://d5c318acf0ab0d1c6cb36a8586da06d6d1be7d1be4dab48ab1982198c0381df7",
          "dweb:/ipfs/QmW6ASCk7xGQo2krY74hE1nB3tN9EeYxKHPW7k7qkDSLaM"
        ],
        "license": "Unlicense"
      }
    },
    "version": 1
  },
  "id": 10
}];