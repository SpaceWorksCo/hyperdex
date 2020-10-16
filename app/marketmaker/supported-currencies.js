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
		coin: 'BAT',
		name: 'Basic Attention Token',
		contractAddress: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
		rpcport: 80,
	},
	{
		coin: 'BCH',
		rpcport: 33333,
		pubtype: 0,
		p2shtype: 5,
		wiftype: 128,
		txfee: 1000,
		electrumServers: [
			{
				host: 'bch.imaginary.cash',
				port: 50001,
			},
			{
				host: 'electrumx-bch.cryptonermal.net',
				port: 50001,
			},
			{
				host: 'wallet.satoshiscoffeehouse.com',
				port: 50001,
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
		required_confirmations: 2,
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
		rpcport: 8332,
		pubtype: 0,
		p2shtype: 5,
		wiftype: 128,
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
		required_confirmations: 2,
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
		coin: 'BTG',
		rpcport: 12332,
		pubtype: 38,
		p2shtype: 23,
		wiftype: 128,
		txfee: 10000,
		electrumServers: [
			{
				host: 'electrumx-eu.bitcoingold.org',
				port: 50001,
			},
			{
				host: 'electrumx-us.bitcoingold.org',
				port: 50001,
			},
		],
	},
	{
		coin: 'CHAIN',
		name: 'Chainmakers',
		asset: 'CHAIN',
		rpcport: 15587,
		txversion: 4,
		overwintered: 1,
		required_confirmations: 2,
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10032,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10032,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10032,
			},
		],
	},
	{
		coin: 'CHIPS',
		name: 'Chips',
		rpcport: 57776,
		pubtype: 60,
		p2shtype: 85,
		wiftype: 188,
		txfee: 10000,
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
		required_confirmations: 2,
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
		required_confirmations: 2,
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
		required_confirmations: 2,
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
		name: 'Dai',
		contractAddress: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
		rpcport: 80,
	},
	{
		coin: 'DASH',
		rpcport: 9998,
		pubtype: 76,
		p2shtype: 16,
		wiftype: 204,
		txfee: 10000,
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
		contractAddress: '0x3aB100442484Dc2414Aa75B2952A0a6f03f8aBFd',
		rpcport: 80,
	},
	{
		coin: 'DEX',
		name: 'InstantDEX',
		asset: 'DEX',
		rpcport: 11890,
		txversion: 4,
		overwintered: 1,
		required_confirmations: 2,
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
		rpcport: 14022,
		pubtype: 30,
		p2shtype: 63,
		wiftype: 128,
		txfee: 100000,
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
		rpcport: 22555,
		pubtype: 30,
		p2shtype: 22,
		wiftype: 158,
		txfee: 500000000,
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
		rpcport: 41879,
		pubtype: 33,
		p2shtype: 5,
		wiftype: 176,
		txfee: 100000,
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
		contractAddress: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
		rpcport: 80,
	},
	{
		coin: 'ETH',
		contractAddress: '0x0000000000000000000000000000000000000000',
		rpcport: 80,
	},
	{
		coin: 'FTC',
		rpcport: 9337,
		pubtype: 14,
		p2shtype: 5,
		wiftype: 142,
		txfee: 1000000,
		electrumServers: [
			{
				host: 'electrumx-gb-1.feathercoin.network',
				port: 50001,
			},
			{
				host: 'electrumx-gb-2.feathercoin.network',
				port: 50001,
			},
			{
				host: 'electrumx-ch-1.feathercoin.ch',
				port: 50001,
			},
			{
				host: 'electrumx-de-2.feathercoin.ch',
				port: 50001,
			},
		],
	},
	{
		coin: 'HODL',
		asset: 'HODL',
		rpcport: 14431,
		txversion: 4,
		overwintered: 1,
		required_confirmations: 2,
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
		coin: 'HUSH',
		rpcport: 8822,
		taddr: 28,
		pubtype: 184,
		p2shtype: 189,
		wiftype: 128,
		txfee: 1000,
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10064,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10064,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10064,
			},
		],
	},
	{
		coin: 'JST',
		name: 'JST (TESTCOIN)',
		contractAddress: '0x996a8aE0304680F6A69b8A9d7C6E37D65AB5AB56',
		rpcport: 80,
	},
	{
		coin: 'JUMBLR',
		name: 'Jumblr',
		asset: 'JUMBLR',
		active: 0,
		rpcport: 15106,
		txversion: 4,
		overwintered: 1,
		required_confirmations: 2,
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
		rpcport: 7771,
		pubtype: 60,
		p2shtype: 85,
		wiftype: 188,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		txfee: 1000,
		protocol: {
			type: 'UTXO'
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
		coin: 'KV',
		name: 'KeyValue',
		asset: 'KV',
		rpcport: 8299,
		txversion: 4,
		overwintered: 1,
		required_confirmations: 2,
		electrumServers: [
			{
				host: 'electrum1.cipig.net',
				port: 10016,
			},
			{
				host: 'electrum2.cipig.net',
				port: 10016,
			},
			{
				host: 'electrum3.cipig.net',
				port: 10016,
			},
		],
	},
	{
		coin: 'LINK',
		name: 'ChainLink',
		contractAddress: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
		rpcport: 80,
	},
	{
		coin: 'LRC',
		name: 'Loopring',
		contractAddress: '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD',
		decimals: 18,
		rpcport: 80,
	},
	{
		coin: 'LTC',
		rpcport: 9332,
		pubtype: 48,
		p2shtype: 5,
		wiftype: 176,
		txfee: 100000,
		electrumServers: [
			{
				host: 'electrum-ltc.bysh.me',
				port: 50001,
			},
			{
				host: 'electrum.ltc.xurious.com',
				port: 50001,
			},
			{
				host: 'ltc.rentonisk.com',
				port: 50001,
			},
			{
				host: 'backup.electrum-ltc.org',
				port: 50001,
			},
		],
	{
		coin: 'MANA',
		name: 'Decentraland',
		contractAddress: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
		rpcport: 80,
	},
	{
		coin: 'MKR',
		name: 'Maker',
		contractAddress: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
		rpcport: 80,
	},
	{
		coin: 'MORTY',
		name: 'Morty',
		asset: 'MORTY',
		rpcport: 16348,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		protocol: {
			type: 'UTXO'
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
		required_confirmations: 2,
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
		rpcport: 8336,
		pubtype: 52,
		p2shtype: 13,
		wiftype: 180,
		txfee: 100000,
		electrumServers: [
			{
				host: 'nmc.bitcoins.sk',
				port: 50002,
			},
			{
				host: 'electrum-nmc.le-space.de',
				port: 50002,
			},
			{
				host: 'ulrichard.ch',
				port: 50006,
			},
		],
	},
	{
		coin: 'OOT',
		name: 'Utrum',
		asset: 'OOT',
		rpcport: 12467,
		required_confirmations: 2,
		electrumServers: [
			{
				host: 'electrum1.utrum.io',
				port: 10088,
			},
			{
				host: 'electrum2.utrum.io',
				port: 10088,
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
		required_confirmations: 2,
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
		contractAddress: '0x595832F8FC6BF59c85C527fEC3740A1b7a361269',
		rpcport: 80,
	},
	{
		coin: 'RICK',
		name: 'Rick',
		asset: 'RICK',
		rpcport: 25435,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		protocol: {
			type: 'UTXO'
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
		coin: 'QTUM',
		rpcport: 3889,
		pubtype: 58,
		p2shtype: 50,
		wiftype: 128,
		txfee: 400000,
		electrumServers: [
			{
				host: 's1.qtum.info',
				port: 50001,
			},
			{
				host: 's2.qtum.info',
				port: 50001,
			},
			{
				host: 's3.qtum.info',
				port: 50001,
			},
			{
				host: 's4.qtum.info',
				port: 50001,
			},
			{
				host: 's5.qtum.info',
				port: 50001,
			},
			{
				host: 's6.qtum.info',
				port: 50001,
			},
			{
				host: 's7.qtum.info',
				port: 50001,
			},
			{
				host: 's8.qtum.info',
				port: 50001,
			},
			{
				host: 's9.qtum.info',
				port: 50001,
			},
		],
	},
	{
		coin: 'REP',
		name: 'Augur',
		contractAddress: '0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6',
		rpcport: 80,
	},
	{
		coin: 'REVS',
		name: 'Revs',
		asset: 'REVS',
		rpcport: 10196,
		txversion: 4,
		overwintered: 1,
		required_confirmations: 2,
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
		coin: 'SPACE',
		name: 'Spacecoin',
		asset: 'SPACE',
		rpcport: 35593,
		txversion: 4,
		overwintered: 1,
		mm2: 1,
		required_confirmations: 6,
		protocol: {
			type: 'UTXO'
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
		required_confirmations: 2,
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
		contractAddress: '0x0000000000085d4780B73119b644AE5ecd22b376',
		rpcport: 80,
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
		required_confirmations: 2,
		electrumServers: [
			{
				host: 'el0.vrsc.0x03.services',
				port: 10000,
			},
			{
				host: 'el1.vrsc.0x03.services',
				port: 10000,
			},
			{
				host: 'el2.vrsc.0x03.services',
				port: 10000,
			},
		],
	},
	{
		coin: 'VTC',
		rpcport: 5888,
		pubtype: 71,
		p2shtype: 5,
		wiftype: 128,
		txfee: 100000,
		electrumServers: [
			{
				host: 'fr1.vtconline.org',
				port: 55001,
			},
			{
				host: 'uk1.vtconline.org',
				port: 55001,
			},
			{
				host: 'vtc-cce-1.coinomi.net',
				port: 5028,
			},
			{
				host: 'vtc-cce-2.coinomi.net',
				port: 5028,
			},
		],
	},
	{
		coin: 'WLC',
		name: 'Wireless Coin',
		asset: 'WLC',
		rpcport: 12167,
		txversion: 4,
		overwintered: 1,
		required_confirmations: 2,
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
		rpcport: 8888,
		pubtype: 82,
		p2shtype: 7,
		wiftype: 210,
		txfee: 10000,
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
		rpcport: 8232,
		taddr: 28,
		pubtype: 184,
		p2shtype: 189,
		wiftype: 128,
		txversion: 4,
		overwintered: 1,
		txfee: 10000,
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
		required_confirmations: 2,
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
		contractAddress: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
		rpcport: 80,
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
