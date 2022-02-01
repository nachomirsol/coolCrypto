import React, { useEffect } from 'react';
/** Services */
import { useApi } from 'api/hooks/useApi';
import cryptoCurrenciesApi from 'api/cryptoCurrencies';
/** Styles */
import './styles/home.scss';

export const Home = () => {
	const getCurrenciesApi = useApi(cryptoCurrenciesApi.getCurrencies);
	useEffect(() => {
		getCurrenciesApi.request();
	}, []);
	return (
		<div className='home'>
			<div className='searchbar'>
				Hello{cryptoCurrenciesApi?.data && 'search'}
			</div>
		</div>
	);
};
