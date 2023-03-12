import { ethers } from 'ethers'
import NETWORKS, { type Network } from './constants/networks'

type Event = 'receiveToken'

export default class TokenReceiver {
  private network: Network

  constructor(networkOrNetworkName: Network | keyof typeof NETWORKS) {
    if (typeof networkOrNetworkName === 'string') {
      this.network = NETWORKS[networkOrNetworkName]
    } else {
      this.network = networkOrNetworkName
    }
  }

  public on(event: Event, callback: any) {
    // const provider = new ethers.providers.JsonRpcProvider(this.network.rpcs.ankr)
    // provider.on(event, callback)
  }
}

const receiver = new TokenReceiver('ethereumMainnet')
// receiver.
