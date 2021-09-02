import Web3Modal from 'web3modal'

const providerOptions = {
  injected: {
    display: {
      logo: "data:image/gif;base64,INSERT_BASE64_STRING",
      name: "Injected",
      description: "Connect with the provider in your Browser"
    },
    package: null
  }
}

export const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions
})