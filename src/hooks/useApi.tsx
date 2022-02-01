import { useState } from 'react';

export const useApi = (apiFunction: any) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const request = async (...args: any) => {
		setLoading(true);
		try {
			const result = await apiFunction(...args);
			setData(result?.data);
		} catch (error: any) {
			setError(error.message || 'Unexpected error');
		} finally {
			setLoading(false);
		}
	};
	return {
		data,
		error,
		loading,
		request,
	};
};
