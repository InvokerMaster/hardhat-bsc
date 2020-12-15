/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CurrentCost } from "./CurrentCost";

export class CurrentCostFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(c: string, overrides?: Overrides): Promise<CurrentCost> {
    return super.deploy(c, overrides || {}) as Promise<CurrentCost>;
  }
  getDeployTransaction(c: string, overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(c, overrides || {});
  }
  attach(address: string): CurrentCost {
    return super.attach(address) as CurrentCost;
  }
  connect(signer: Signer): CurrentCostFactory {
    return super.connect(signer) as CurrentCostFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurrentCost {
    return new Contract(address, _abi, signerOrProvider) as CurrentCost;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "oracleAddress",
        type: "address",
      },
      {
        name: "endpoint",
        type: "bytes32",
      },
      {
        name: "start",
        type: "uint256",
      },
      {
        name: "nDots",
        type: "uint256",
      },
    ],
    name: "_costOfNDots",
    outputs: [
      {
        name: "cost",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "updateDependencies",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "selfDestruct",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "oracleAddress",
        type: "address",
      },
      {
        name: "endpoint",
        type: "bytes32",
      },
    ],
    name: "_dotLimit",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "oracleAddress",
        type: "address",
      },
      {
        name: "endpoint",
        type: "bytes32",
      },
      {
        name: "start",
        type: "uint256",
      },
    ],
    name: "_currentCostOfDot",
    outputs: [
      {
        name: "cost",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "c",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516020806113c88339810180604052810190808051906020019092919050505080336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061010e610114640100000000026401000000009004565b50610253565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f5245474953545259000000000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b1580156101d657600080fd5b505af11580156101ea573d6000803e3d6000fd5b505050506040513d602081101561020057600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b611166806102626000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063197d66d5146100885780636e5ecdff146101015780638da5cb5b146101185780639cb8a26a1461016f578063c1ca69c414610186578063ecca1fad146101eb578063f2fde38b1461025a575b600080fd5b34801561009457600080fd5b506100eb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190803590602001909291908035906020019092919050505061029d565b6040518082815260200191505060405180910390f35b34801561010d57600080fd5b506101166105fa565b005b34801561012457600080fd5b5061012d6106c9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017b57600080fd5b506101846106ee565b005b34801561019257600080fd5b506101d5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190505050610783565b6040518082815260200191505060405180910390f35b3480156101f757600080fd5b50610244600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560001916906020019092919080359060200190929190505050610a49565b6040518082815260200191505060405180910390f35b34801561026657600080fd5b5061029b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a61565b005b60008060606000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166387cd29a489896040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001826000191660001916815260200192505050602060405180830381600087803b15801561037157600080fd5b505af1158015610385573d6000803e3d6000fd5b505050506040513d602081101561039b57600080fd5b81019080805190602001909291905050509250826040519080825280602002602001820160405280156103dd5781602001602082028038833980820191505090505b509150600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632316a9ff89896040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001826000191660001916815260200192505050600060405180830381600087803b1580156104ad57600080fd5b505af11580156104c1573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060208110156104eb57600080fd5b81019080805164010000000081111561050357600080fd5b8281019050602081018481111561051957600080fd5b815185602082028301116401000000008211171561053657600080fd5b5050929190505050915061054b828787610bb6565b9050600081121515156105ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001807f4572726f723a20436f7374206f6620646f74732063616e6e6f74206265206e6581526020017f676174697665000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b809350505050949350505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4572726f723a20436f6f7264696e61746f72204f6e6c792046756e6374696f6e81525060200191505060405180910390fd5b6106c7610d0e565b565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561074957600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000806060600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166387cd29a486866040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001826000191660001916815260200192505050602060405180830381600087803b15801561085557600080fd5b505af1158015610869573d6000803e3d6000fd5b505050506040513d602081101561087f57600080fd5b81019080805190602001909291905050509150816040519080825280602002602001820160405280156108c15781602001602082028038833980820191505090505b509050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632316a9ff86866040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001826000191660001916815260200192505050600060405180830381600087803b15801561099157600080fd5b505af11580156109a5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060208110156109cf57600080fd5b8101908080516401000000008111156109e757600080fd5b828101905060208101848111156109fd57600080fd5b8151856020820283011164010000000082111715610a1a57600080fd5b505092919050505090508060018303815181101515610a3557fe5b906020019060200201519250505092915050565b6000610a58848484600061029d565b90509392505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610abc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610af857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060008060009450600093508860018a5103815181101515610bd957fe5b9060200190602002015187890111151515610c5c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4572726f723a2046756e6374696f6e206e6f7420696e20646f74206c696d697481525060200191505060405180910390fd5b5b8851851015610d01578885815181101515610c7457fe5b90602001906020020151925088600184870101815181101515610c9357fe5b906020019060200201519150600283860101905081881115610cb757809450610c5d565b610cd589868a858b8d0111610ccc578a610cd0565b8b86035b610e4d565b8401935081878901111515610cec57839550610d02565b60018883030187039650819750809450610c5d565b5b50505050509392505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663358177736040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825260088152602001807f5245474953545259000000000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b158015610dd057600080fd5b505af1158015610de4573d6000803e3d6000fd5b505050506040513d6020811015610dfa57600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600080600080600080600094508989815181101515610e6857fe5b90602001906020020151935060018901925083830191508290505b81811015610ed357610e9a60018903848303610f82565b610ea8888a01858403610f82565b038a82815181101515610eb757fe5b9060200190602002015102850194508080600101915050610e83565b60008512151515610f72576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001807f4572726f723a20436f7374206d7573742062652067726561746572207468616e81526020017f207a65726f00000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b8495505050505050949350505050565b600060068211158015610f96575060008210155b151561100a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4572726f723a20496e76616c696420506965636577697365204c6f676963000081525060200191505060405180910390fd5b600082141561101b57829050611134565b600182141561103d57600260018401840281151561103557fe5b049050611134565b6002821415611067576006600184600202016001850185020281151561105f57fe5b049050611134565b600382141561108b5760028060018501850281151561108257fe5b040a9050611134565b60048214156110c457601e60018460030285866003020201036001856002020160018601860202028115156110bc57fe5b049050611134565b60058214156110ed576001836002026002850a600202010360026001850185020a029050611134565b600682141561112f57602a6001846003026003860a6006026004870a60030201030160018560020201600186018602020281151561112757fe5b049050611134565b600090505b929150505600a165627a7a723058200856436a9be9e0239d9a6a15e9adb3c4cac06d1b6ac01a576e4405564964101f0029";
