// TODO(lukechilds): Extract this into an npm package when it's more mature
import ow from 'ow';
import {isEthBased} from '../marketmaker/supported-currencies';

const explorers = new Map(Object.entries({
	BCH: 'https://blockchair.com/bitcoin-cash/transaction/{txid}',
	BOTS: 'https://bots.kmdexplorer.io/tx/{txid}',
	BTC: 'https://www.blocktrail.com/BTC/tx/{txid}',
	BTCH: 'https://btch.kmdexplorer.io/tx/{txid}',
	BTG: 'https://btgexp.com/tx/{txid}',
	CCL: 'http://ccl.explorer.dexstats.info/tx/{txid}',
	CHAIN: 'https://explorer.chainmakers.co/tx/{txid}',
	CHIPS: 'http://chips.komodochainz.info/tx/{txid}',
	COQUI: 'https://explorer.coqui.cash/tx/{txid}',
	CRYPTO: 'https://crypto.kmdexplorer.io/tx/{txid}',
	DASH: 'https://chainz.cryptoid.info/dash/tx.dws?{txid}',
	DEX: 'https://dex.kmdexplorer.io/tx/{txid}',
	DGB: 'https://digiexplorer.info/tx/{txid}',
	DOGE: 'http://dogechain.info/tx/{txid}',
	EMC2: 'https://chainz.cryptoid.info/emc2/tx.dws?{txid}',
	FTC: 'https://fsight.chain.tips/tx/{txid}',
	HODL: 'https://hodl.kmdexplorer.io/tx/{txid}',
	HUSH: 'https://explorer.myhush.org/tx/{txid}',
	JUMBLR: 'https://jumblr.kmdexplorer.io/tx/{txid}',
	KMD: 'https://kmdexplorer.io/tx/{txid}',
	KV: 'https://ceal.kmdexplorer.io/tx/{txid}',
	LTC: 'https://bchain.info/LTC/tx/{txid}',
	MESH: 'https://mesh.kmdexplorer.io/tx/{txid}',
	MGW: 'https://mgw.kmdexplorer.io/tx/{txid}',
	MORTY: 'https://morty.kmd.dev/tx/{txid}',
	MSHARK: 'https://mshark.kmdexplorer.io/tx/{txid}',
	NMC: 'https://nmc.tokenview.com/en/tx/{txid}',
	OOT: 'http://explorer.utrum.io/tx/{txid}',
	PANGEA: 'https://pangea.kmdexplorer.io/tx/{txid}',
	QTUM: 'https://explorer.qtum.org/tx/{txid}',
	REVS: 'https://revs.kmdexplorer.io/tx/{txid}',
	RICK: 'https://rick.kmd.dev/tx/{txid}',
	SPACE: 'https://explorer.spaceworks.co/tx/{txid}',
	SUPERNET: 'https://supernet.kmdexplorer.io/tx/{txid}',
	VRSC: 'https://explorer.veruscoin.io/tx/{txid}',
	WLC: 'https://wlc.kmdexplorer.io/tx/{txid}',
	XZC: 'http://explorer.zcoin.io/tx/{txid}',
	ZEC: 'https://explorer.zcha.in/transactions/{txid}',
	ZILLA: 'https://www.zillaexplorer.io/tx/{txid}',
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
