import { Route, Switch } from "react-router-dom";

import { HomePage } from "pages/Home";
import { JoinPage } from "pages/JoinCommunity";

export default function AppRoutes() {
	return (
		<Switch>
			<Route key={0} path="/" component={HomePage} exact  />
			<Route key={0} path="/join" component={JoinPage} />
		</Switch>
	);
}
