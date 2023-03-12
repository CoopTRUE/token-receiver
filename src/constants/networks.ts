export interface Network {
  chainId: number
  rpcs: {
    [name: string]: string
  }
  explorer: string
}

export default {
  ethereumMainnet: {
    chainId: 1,
    rpcs: {
      ankr: 'https://rpc.ankr.com/eth',
      cloudflare: 'https://cloudflare-eth.com'
    },
    explorer: 'https://etherscan.io'
  }
} satisfies { [name: string]: Network }
