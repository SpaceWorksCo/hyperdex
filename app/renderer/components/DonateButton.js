import React from 'react';
import Modal from 'components/Modal';
import Button from 'components/Button';
import CopyCurrencyAddress from 'components/CopyCurrencyAddress';
import {translate} from '../translate';
import './DonateButton.scss';

const t = translate('app');

const donationAddresses = {
	space: 'RTUqKVvvxAbyMSKVnQBBL9j459UWspetJu',
	btc: '1KCeEz3eMLoQHRxJKEC4EdPrJt1vFRDiUa',
	kmd: 'RTUqKVvvxAbyMSKVnQBBL9j459UWspetJu',
};

class DonateButton extends React.Component {
	state = {
		isOpen: false,
	};

	open = () => {
		this.setState({isOpen: true});
	};

	close = () => {
		this.setState({isOpen: false});
	};

	render() {
		return (
			<>
				<Modal
					className="DonateModal"
					title={`${t('donate.title')} ❤️`}
					open={this.state.isOpen}
					width="500px"
					onClose={this.close}
				>
					<>
						<div className="section text">
							<p>{t('donate.bodyText')}</p>
						</div>
						<div className="section">
							<label>SPACE:</label>
							<CopyCurrencyAddress value={donationAddresses.space}/>
						</div>
						<div className="section">
							<label>BTC:</label>
							<CopyCurrencyAddress value={donationAddresses.btc}/>
						</div>
						<div className="section">
							<label>KMD:</label>
							<CopyCurrencyAddress value={donationAddresses.kmd}/>
						</div>
					</>
				</Modal>
				<Button
					className="DonateButton"
					value={t('donate.title')}
					onClick={this.open}
				/>
			</>
		);
	}
}

export default DonateButton;
