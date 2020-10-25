import {remote} from 'electron';
import React from 'react';
import {Trans} from 'react-i18next';
import Modal from 'components/Modal';
import ExternalLink from 'components/ExternalLink';
import {instance, translate} from '../../translate';

const config = remote.require('./config');
const t = translate('exchange');

class Intro extends React.Component {
	state = {
		shouldOpen: !config.get('hasShownExchangeIntro'),
	}

	closedHandler = () => {
		config.set('hasShownExchangeIntro', true);
		this.setState({shouldOpen: false});
	};

	render() {
		return (
			<Modal
				title={t('intro.title')}
				open={this.state.shouldOpen}
				didClose={this.closedHandler}
				width="500px"
			>
				<Trans i18n={instance} i18nKey="intro.description" t={t}>
					<p>HyperDEX is a decentralized exchange. It has a P2P order book and trades are made
						via <ExternalLink url="https://en.bitcoin.it/wiki/Atomic_cross-chain_trading">cross-chain atomic
							swaps</ExternalLink>. This means it works slightly differently than a centralized exchange.
					</p>
					<p>Orders can take a while to propagate across the P2P network. You may need to wait a while for the
						order book to display.</p>
					<p>An atomic swap is comprised of six on-chain transactions.</p>
				</Trans>
			</Modal>
		);
	}
}

export default Intro;
