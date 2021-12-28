require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe street repeat machine exchange giraffe light army genius'; 
let testAccounts = [
"0xb8235ef852b24c0d3997993e42b0ba214456d5648ddc48ab3c84a8933cc41492",
"0x77c562e3c9d22bfdf4170623004d00956837c50a8289c40fc1f520764a4ff9a8",
"0xc5f0b11645c11dba740f2a80c958ceb0238dd46ab6253d55f87522f6e8901bd5",
"0x50d958199c2f187038737aa485155b95de0cdae7f62f9db1d238194f81ffff6b",
"0x2ed1c75bface426c0171f40800adca9f67bea7fa103b40154d3f6c628872c773",
"0x150f43615ae5b342923cd5b0a361011d7d9ed2d0ee86c294e21d18fa84a9c166",
"0x7d770e3e74a86ca019a00370f611b1dc9f6b05bd0a9d682ee2f713c914e55d3c",
"0x12611aaaa6250c121a3674e39eed4bb375e60a9be5a2f20c166ff738a712e9ef",
"0xadcc4018d269fca8fb466c3da634b0cc817e3e9e4fe10f7bd23cabe72be68ea5",
"0x393ee25ac9357137d1077306290b514b573cff5e809db15213f84269e061bfa4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


