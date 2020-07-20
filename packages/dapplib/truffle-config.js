require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strong riot pizza mix hunt battle fortune ghost'; 
let testAccounts = [
"0xe6a859bbc8c2c19d4958c267038a26ec54e9ea1898016d838acb4c18ca424480",
"0x863f1d7012fd61f126d8657ff99e88bc3391a3da8587c068ea5022e3213ab1c5",
"0x0828daf7df2224ec7d88ea2981cc262c8deec3ac2412d484e6d56f891078a495",
"0x25776738984c028c49a918fac01168e9264f5e4f57f6ef0f6c95f4b81ac046a2",
"0x1b24f3039f4948d59a897bae01b368b993a4c9aec2978a77a23b7e920fbbbc10",
"0x718dfd8a7f4328d66d976285d8a2f5f523057cfa0517391fb0e0009d7597f42d",
"0xc2b26857a51e492b7b05df2e8c9cb4c42fcd9219a61e410beddbb55d87299eab",
"0x54b0c45f533a2d1b7a358e4539985988b6e094215387f0928fa71516a569b4ce",
"0xec96b8b223f97f413309e3f912c020b5907f57b77967ebea1a167cd3eaa91061",
"0x64e5eb1b069aa670c7159cf18309969ea0154e004ca0d9ee26c70fc6d99de87a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
