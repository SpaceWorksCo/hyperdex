/* eslint-disable camelcase */
'use strict';
const coinlist = require('coinlist');
const _ = require('lodash');
const {hiddenCurrencies} = require('../constants');

/*
Info:
We use the `name` property only when the currency is not on `coinmarketcap.com`.
*/

const supportedCurrencies = [
	{
		coin: 'AWC',
		name: 'atomic-wallet-coin',
		fname: 'Atomic Wallet Coin',
		avg_blocktime: 0.25,
		rpcport: 80,
		mm2: 1,
		required_confirmations: 3,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0xaD22f63404f7305e4713CcBd4F296f34770513f4',
			},
		},
	},
	{
		coin: 'BAT',
		name: 'Basic Attention Token',
		rpcport: 80,
		mm2: 1,
		required_confirmations: 3,
		avg_blocktime: 0.25,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
			},
		},
	},
	{
		coin: 'BCH',
		rpcport: 33333,
		pubtype: 0,
		p2shtype: 5,
		wiftype: 128,
		txfee: 0,
		segwit: 'true',
		address_format: {
			format: `cashaddress`,
			network: 'bitcoincash',
		},
		mm2: 1,
		required_confirmations: 1,
		avg_blocktime: 10,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10055,
			},
			{
				host: 'electrum2.cipig.net',
				port: 50001,
			},
			{
				host: 'electrum3.cipig.net',
				port: 50001,
			},
		],
	},
	{
		coin: 'BET',
		name: 'BET',
		asset: 'BET',
		rpcport: 14250,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10012,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10012,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10012,
			},
		],
	},
	{
		coin: 'BOTS',
		name: 'Bots',
		asset: 'BOTS',
		rpcport: 11964,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10007,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10007,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10007,
			},
		],
	},
	{
		coin: 'BTC',
		name: 'Bitcoin',
		rpcport: 8332,
		pubtype: 0,
		p2shtype: 5,
		wiftype: 128,
		segwit: 'true',
		txfee: 0,
		estimate_fee_mode: 'ECONOMICAL',
		mm2: 1,
		required_confirmations: 1,
		avg_blocktime: 10,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10000,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10000,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10000,
			},
		],
	},
	{
		coin: 'BTCH',
		name: 'Bitcoin Hush',
		asset: 'BTCH',
		rpcport: 8800,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10020,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10020,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10020,
			},
		],
	},
	{
		coin: 'BUSD',
		name: 'binance-usd',
		fname: 'Binance USD',
		avg_blocktime: 0.25,
		rpcport: 80,
		mm2: 1,
		required_confirmations: 3,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
			},
		},
	},
	{
		coin: 'CHIPS',
		name: 'Chips',
		rpcport: 57776,
		pubtype: 60,
		p2shtype: 85,
		wiftype: 188,
		txfee: 10000,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 0.166,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10053,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10053,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10053,
			},
		],
	},
	{
		coin: 'CCL',
		name: 'CoinCollect',
		asset: 'CCL',
		rpcport: 20849,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10029,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10029,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10029,
			},
		],
	},
	{
		coin: 'COQUI',
		name: 'Coqui Cash',
		asset: 'COQUICASH',
		rpcport: 19712,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10011,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10011,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10011,
			},
		],
	},
	{
		coin: 'CRYPTO',
		name: 'Crypto777',
		asset: 'CRYPTO',
		rpcport: 8516,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10008,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10008,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10008,
			},
		],
	},
	{
		coin: 'DAI',
		name: 'Multi-collateral DAI',
		rpcport: 80,
		mm2: 1,
		required_confirmations: 3,
		avg_blocktime: 0.25,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
			},
		},
	},
	{
		coin: 'DASH',
		name: 'Dash',
		rpcport: 9998,
		pubtype: 76,
		p2shtype: 16,
		wiftype: 204,
		txfee: 0,
		mm2: 1,
		required_confirmations: 2,
		avg_blocktime: 2.633,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10061,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10061,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10061,
			},
		],
	},
	{
		coin: 'DEC8',
		name: 'DEC8 [Test]',
		rpcport: 80,
		mm2: 1,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0x3aB100442484Dc2414Aa75B2952A0a6f03f8aBFd',
			},
		},
	},
	{
		coin: 'DEX',
		name: 'InstantDEX',
		asset: 'DEX',
		rpcport: 11890,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10006,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10006,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10006,
			},
		],
	},
	{
		coin: 'DGB',
		name: 'Digibyte',
		rpcport: 14022,
		pubtype: 30,
		p2shtype: 63,
		wiftype: 128,
		txfee: 0,
		segwit: 'true',
		mm2: 1,
		required_confirmations: 7,
		avg_blocktime: 1.25,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10059,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10059,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10059,
			},
		],
	},
	{
		coin: 'DOGE',
		name: 'Dogecoin',
		rpcport: 22555,
		pubtype: 30,
		p2shtype: 22,
		wiftype: 158,
		txfee: 0,
		force_min_relay_fee: 'true',
		mm2: 1,
		required_confirmations: 2,
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10060,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10060,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10060,
			},
		],
	},
	{
		coin: 'EMC2',
		name: 'Einsteinium',
		rpcport: 41879,
		pubtype: 33,
		p2shtype: 5,
		wiftype: 176,
		txfee: 100000,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1.1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10062,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10062,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10062,
			},
		],
	},
	{
		coin: 'ENJ',
		name: 'Enjin Coin',
		rpcport: 80,
		mm2: 1,
		required_confirmations: 3,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
			},
		},
	},
	{
		coin: 'ETH',
		name: 'Ethereum',
		fname: 'Ethererum',
		avg_blocktime: '0.25',
		rpcport: 80,
		mm2: 1,
		required_confirmations: '3',
		protocol: {
			type: 'ETH',
		}
	},
	{
		coin: 'FTC',
		name: 'Feathercoin',
		rpcport: 9337,
		pubtype: 14,
		p2shtype: 5,
		wiftype: 142,
		txfee: 1000000,
		segwit: 'true',
		mm2: 1,
		required_confirmations: 5,
		avg_blocktime: 1.033,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10054,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10054,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10054,
			},
		],
	},
	{
		coin: 'HODL',
		asset: 'HODL',
		rpcport: 14431,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10009,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10009,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10009,
			},
		],
	},
	{
		coin: 'JST',
		name: 'JST (TESTCOIN)',
		rpcport: 80,
		mm2: 1,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0x996a8aE0304680F6A69b8A9d7C6E37D65AB5AB56',
			},
		},
	},
	{
		coin: 'JUMBLR',
		name: 'Jumblr',
		asset: 'JUMBLR',
		rpcport: 15106,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10004,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10004,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10004,
			},
		],
	},
	{
		coin: 'KMD',
		name: 'Komodo',
		rpcport: 7771,
		pubtype: 60,
		p2shtype: 85,
		wiftype: 188,
		txversion: 4,
		overwintered: 1,
		txfee: 1000,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10001,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10001,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10001,
			},
		],
	},
	{
		coin: 'LABS',
		name: 'KMD Labs',
		asset: 'LABS',
		rpcport: 40265,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 5,
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10019,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10019,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10019,
			},
		],
	},
	{
		coin: 'LINK',
		name: 'ChainLink',
		rpcport: 80,
		mm2: 1,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
			},
		},
	},
	{
		coin: 'LRC',
		name: 'Loopring',
		decimals: 18,
		rpcport: 80,
		mm2: 1,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD',
			},
		},
	},
	{
		coin: 'LTC',
		name: 'Litecoin',
		rpcport: 9332,
		pubtype: 48,
		p2shtype: 50,
		wiftype: 176,
		txfee: 0,
		segwit: 'true',
		mm2: 1,
		required_confirmations: 2,
		avg_blocktime: 2.5,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10063,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10063,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10063,
			},
		],
	},
	{
		coin: 'MANA',
		name: 'Decentraland',
		rpcport: 80,
		mm2: 1,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
			},
		},
	},
	{
		coin: 'MCL',
		name: 'MarmaraCreditLoops',
		asset: 'MCL',
		rpcport: 38825,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 5,
		requires_notarization: 'false',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10023,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10023,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10023,
			},
		],
	},
	{
		coin: 'MGW',
		name: 'MultiGateWay',
		asset: 'MGW',
		rpcport: 12386,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10015,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10015,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10015,
			},
		],
	},
	{
		coin: 'MKR',
		name: 'Maker',
		rpcport: 80,
		mm2: 1,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
			},
		},
	},
	{
		coin: 'MORTY',
		name: 'Morty',
		asset: 'MORTY',
		rpcport: 16348,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10018,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10018,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10018,
			},
		],
	},
	{
		coin: 'MSHARK',
		name: 'MiliShark',
		asset: 'MSHARK',
		rpcport: 8846,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10013,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10013,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10013,
			},
		],
	},
	{
		coin: 'NMC',
		name: 'Namecoin',
		rpcport: 8336,
		pubtype: 52,
		p2shtype: 13,
		wiftype: 180,
		txfee: 0,
		segwit: 'true',
		mm2: 1,
		required_confirmations: 2,
		avg_blocktime: 10,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrumx1.nmc.bitclc.net',
				port: 50001,
			},
			{
				host: 'electrumx2.nmc.bitclc.net',
				port: 50001,
			},
			{
				host: 'electrumx3.nmc.bitclc.net',
				port: 50001,
			},
			{
				host: 'electrumx4.nmc.bitclc.net',
				port: 50001,
			},
		],
	},
	{
		coin: 'OOT',
		name: 'Utrum',
		asset: 'OOT',
		rpcport: 12467,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10021,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10021,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10021,
			},
		],
	},
	{
		coin: 'PANGEA',
		name: 'Pangea Poker',
		asset: 'PANGEA',
		rpcport: 14068,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10010,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10010,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10010,
			},
		],
	},
	{
		coin: 'POWR',
		name: 'Power Ledger',
		rpcport: 80,
		mm2: 1,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0x595832F8FC6BF59c85C527fEC3740A1b7a361269',
			},
		},
	},
	{
		coin: 'QTUM',
		name: 'Qtum',
		rpcport: 3889,
		pubtype: 58,
		p2shtype: 50,
		wiftype: 128,
		segwit: 'true',
		txfee: 0,
		mm2: 1,
		required_confirmations: 3,
		avg_blocktime: 2.133,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10050,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10050,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10050,
			},
		],
	},
	{
		coin: 'REP',
		name: 'Augur',
		rpcport: 80,
		mm2: 1,
		required_confirmations: 3,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6',
			},
		},
	},
	{
		coin: 'REVS',
		name: 'Revs',
		asset: 'REVS',
		rpcport: 10196,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10003,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10003,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10003,
			},
		],
	},
	{
		coin: 'RICK',
		name: 'Rick',
		asset: 'RICK',
		rpcport: 25435,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 1,
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10017,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10017,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10017,
			},
		],
	},
	{
		coin: 'SPACE',
		name: 'Spacecoin',
		asset: 'SPACE',
		rpcport: 35593,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 6,
		requires_notarization: 'false',
		avg_blocktime: 0.5,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.spaceworks.co',
				port: 50001,
			},
			{
				host: 'electrum2.spaceworks.co',
				port: 50001,
			},
		],
	},
	{
		coin: 'SUPERNET',
		name: 'Supernet',
		asset: 'SUPERNET',
		rpcport: 11341,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10005,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10005,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10005,
			},
		],
	},
	{
		coin: 'TUSD',
		name: 'TrueUSD',
		rpcport: 80,
		mm2: 1,
		required_confirmations: 3,
		avg_blocktime: 0.25,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0x0000000000085d4780B73119b644AE5ecd22b376',
			},
		},
	},
	{
		coin: 'USDC',
		name: 'USD Coin',
		rpcport: 80,
		mm2: 1,
		required_confirmations: 3,
		avg_blocktime: 0.25,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
			},
		},
	},
	// Temporarily disabled as it's not working with mm2
	// {
	// 	coin: 'USDT',
	// 	name: 'Tether',
	// 	contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
	// 	rpcport: 80,
	// },
	{
		coin: 'VRSC',
		name: 'VerusCoin',
		asset: 'VRSC',
		rpcport: 27486,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 5,
		avg_blocktime: 1,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'el0.veruscoin.io',
				port: 17485,
			},
			{
				host: 'el1.veruscoin.io',
				port: 17485,
			},
			{
				host: 'el2.veruscoin.io',
				port: 17485,
			},
		],
	},
	{
		coin: 'VTC',
		name: 'Vertcoin',
		rpcport: 5888,
		pubtype: 71,
		p2shtype: 5,
		wiftype: 128,
		txfee: 0,
		segwit: 'true',
		mm2: 1,
		required_confirmations: 4,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'fr1.vtconline.org',
				port: 55001,
			},
			{
				host: 'uk1.vtconline.org',
				port: 55001,
			},
		],
	},
	{
		coin: 'WLC',
		name: 'Wireless Coin',
		asset: 'WLC21',
		rpcport: 38808,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10014,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10014,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10014,
			},
		],
	},
	{
		coin: 'XZC',
		name: 'Zcoin',
		rpcport: 8888,
		pubtype: 82,
		p2shtype: 7,
		wiftype: 210,
		txfee: 0,
		mm2: 1,
		required_confirmations: 3,
		avg_blocktime: 5.65,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrumx.zcoin.io',
				port: 50001,
			},
			{
				host: 'electrumx02.zcoin.io',
				port: 50001,
			},
			{
				host: 'electrumx03.zcoin.io',
				port: 50001,
			},
		],
	},
	{
		coin: 'ZEC',
		name: 'Zcash',
		rpcport: 8232,
		taddr: 28,
		pubtype: 184,
		p2shtype: 189,
		wiftype: 128,
		txversion: 4,
		overwintered: 1,
		version_group_id: '0x892f2085',
		consensus_branch_id: '0xf5b9230b',
		mm2: 1,
		txfee: 10000,
		required_confirmations: 3,
		avg_blocktime: 1.25,
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10058,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10058,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10058,
			},
		],
	},
	{
		coin: 'ZILLA',
		name: 'ChainZilla',
		asset: 'ZILLA',
		rpcport: 10041,
		mm2: 1,
		required_confirmations: 2,
		requires_notarization: 'true',
		protocol: {
			type: 'UTXO',
		},
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10028,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10028,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10028,
			},
		],
	},
	{
		coin: 'ZRX',
		name: '0x',
		rpcport: 80,
		mm2: 1,
		required_confirmations: 3,
		protocol: {
			type: 'ERC20',
			protocol_data: {
				platform: 'ETH',
				contract_address: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
			},
		},
	},
];

// TODO: Update the `mm2` compatibility info for individual currencies
for (const currency of supportedCurrencies) {
	currency.mm2 = 1;
}

const getCurrencySymbols = () => (
	_(supportedCurrencies)
		.chain()
		.map('coin')
		.without(...hiddenCurrencies)
		.orderBy()
		.value()
);

const getCurrencyName = symbol => {
	const coinParams = supportedCurrencies.find(currency => currency.coin === symbol);

	return coinParams.name || coinlist.get(symbol, 'name') || symbol;
};

const getCurrency = symbol => supportedCurrencies.find(currency => currency.coin === symbol);

const isEthBased = symbol => {
	const currency = getCurrency(symbol);

	if (!currency) {
		throw new Error(`Unsupported currency: ${symbol}`);
	}

	return currency.contractAddress;
};

module.exports = {
	supportedCurrencies,
	getCurrencySymbols,
	getCurrencyName,
	getCurrency,
	isEthBased,
};
