// TODO(lukechilds): Extract this into an npm package when it's more mature
import ow from 'ow';
import {isEthBased} from '../marketmaker/supported-currencies';

const explorers = new Map(Object.entries({
	BCH: 'https://blockchair.com/bitcoin-cash/transaction/{txid}',
	BET: 'https://bet.explorer.dexstats.info/tx/{txid}',
	BOTS: 'https://bots.explorer.dexstats.info/tx/{txid}',
	BTC: 'https://www.blocktrail.com/BTC/tx/{txid}',
	BTCH: 'https://btch.explorer.dexstats.info/tx/{txid}',
	CCL: 'http://ccl.explorer.dexstats.info/tx/{txid}',
	CHIPS: 'http://chips.komodochainz.info/tx/{txid}',
	COQUI: 'https://explorer.coqui.cash/tx/{txid}',
	CRYPTO: 'https://crypto.explorer.dexstats.info/tx/{txid}',
	DASH: 'https://chainz.cryptoid.info/dash/tx.dws?{txid}',
	DEX: 'https://dex.explorer.dexstats.info/tx/{txid}',
	DGB: 'https://digiexplorer.info/tx/{txid}',
	DOGE: 'http://dogechain.info/tx/{txid}',
	EMC2: 'https://chainz.cryptoid.info/emc2/tx.dws?{txid}',
	FTC: 'https://fsight.chain.tips/tx/{txid}',
	HODL: 'https://hodl.explorer.dexstats.info/tx/{txid}',
	JUMBLR: 'https://jumblr.explorer.dexstats.info/tx/{txid}',
	KMD: 'https://kmdexplorer.io/tx/{txid}',
	LABS: 'https://labs.explorer.dexstats.info/tx/{txid}',
	LTC: 'https://bchain.info/LTC/tx/{txid}',
	MCL: 'https://mcl.explorer.dexstats.info/tx/{txid}',
	MGW: 'https://mgw.explorer.dexstats.info/tx/{txid}',
	MORTY: 'https://morty.explorer.dexstats.info/tx/{txid}',
	MSHARK: 'https://mshark.explorer.dexstats.info/tx/{txid}',
	NMC: 'https://nmc.tokenview.com/en/tx/{txid}',
	OOT: 'https://oot.explorer.dexstats.info/tx/{txid}',
	PANGEA: 'https://pangea.explorer.dexstats.info/tx/{txid}',
	QTUM: 'https://explorer.qtum.org/tx/{txid}',
	REVS: 'https://revs.explorer.dexstats.info/tx/{txid}',
	RICK: 'https://rick.explorer.dexstats.info/tx/{txid}',
	SPACE: 'https://explorer.spaceworks.co/tx/{txid}',
	SUPERNET: 'https://supernet.explorer.dexstats.info/tx/{txid}',
	VRSC: 'https://explorer.veruscoin.io/tx/{txid}',
	VTC: 'https://insight.vertcoin.org/tx/{txid}',
	WLC: 'https://wlc.kmdexplorer.io/tx/{txid}',
	XZC: 'https://explorer.zcoin.io/tx/{txid}',
	ZEC: 'https://explorer.zcha.in/transactions/{txid}',
	ZILLA: 'https://zilla.explorer.dexstats.info/tx/{txid}',
}));

const blockExplorer = {};

blockExplorer.tx = (symbol, txid) => {
	ow(symbol, 'symbol', ow.string.uppercase);
	ow(txid, 'txid', ow.string);

	const explorer = explorers.get(isEthBased(symbol) ? 'ETH' : symbol);

	// Fallback
	if (!explorer) {
		return `https://www.google.com/search?q=${symbol} Transaction ${txid}`;
	}

	const explorerUrl = explorer.replace('{txid}', txid);

	return explorerUrl;
};

export default blockExplorer;
