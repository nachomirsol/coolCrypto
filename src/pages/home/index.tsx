import { useEffect } from 'react';
/** Services */
import { useApi } from 'api/hooks/useApi';
import cryptoCurrenciesApi from 'api/cryptoCurrencies';
/** Styles */
import './styles/home.scss';

export const Home = () => {
	const { data, request } = useApi(cryptoCurrenciesApi.getCurrencies);
	useEffect(() => {
		request();
	}, []);
	return (
		<div className='home'>
			{console.log(data?.data)}
			<div className='home__searchbar'>
				<input type='search' name='search' />
			</div>
			<div className='home__grid'>
				{data?.data.map((item) => {
					return <div className='home__grid-item'>{item.id}</div>;
				})}
			</div>
		</div>
	);
};
