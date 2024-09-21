
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const HomePage = () => {
	const history = useHistory();

	useEffect(() => {
		history.push("/join");
	}, [])
	return (
		<></>
	);
};
