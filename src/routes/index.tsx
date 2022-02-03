/** Libraries */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** Components */
import { Header } from 'components/header';
/** constants */
import { ROUTES } from 'constants/routes';
/** Types */
import { RouteType } from 'types/routes';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{ROUTES.map((route: RouteType) => {
					const Component = route.component;
					return (
						<Route
							key={route.id}
							path={route.path}
							element={
								<>
									<Header />
									<Component />
								</>
							}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
};
