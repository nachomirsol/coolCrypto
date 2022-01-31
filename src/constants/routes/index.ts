/** Components - pages */
import { Home } from 'pages/home';
/** Constants */
import { ROUTEPATHS } from 'constants/paths';
/** Types */
import { RouteType } from 'types/routes';

export const ROUTES: RouteType[] = [
	{
		id: '1',
		path: '',
		exact: true,
		isPrivate: true,
		component: Home,
		label: ROUTEPATHS.HOME,
		icon: '',
		isNavbar: false,
		allowedRoles: [],
		routes: [],
	},
];
