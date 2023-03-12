import { ethers } from 'ethers'
import NETWORKS from './constants/networks'

export default class TokenReceiver {
  private provider: ethers.JsonRpcProvider
  private contract: ethers.Contract
  private contractAddress: string

  constructor(provider: ethers.JsonRpcProvider, contractAddress: string) {
    this.provider = provider
    this.contractAddress = contractAddress
  }

  public async init() {
    const abi = [
      'event Transfer(address indexed from, address indexed to, uint256 value)'
    ]
    this.contract = new ethers.Contract(
      this.contractAddress,
      abi,
      this.provider
    )
  }

  public async listen() {
    this.contract.on('Transfer', (from, to, value) => {
      console.log(from, to, value)
    })
  }
}
