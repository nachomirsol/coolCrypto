export type RouteType = {
	id: string;
	path: string;
	exact: boolean;
	isPrivate: boolean;
	component: any;
	label: string;
	icon?: any;
	isNavbar: boolean;
	allowedRoles: Array<string>;
	routes: Array<RouteType>;
};
