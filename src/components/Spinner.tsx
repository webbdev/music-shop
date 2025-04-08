import { FadeLoader } from "react-spinners";
import { CSSProperties } from "react";

const override: CSSProperties = {
	display: "block",
	margin: "0 auto",
	textAlign: "center",
};

const Spinner: React.FC = () => {
	return (
		<FadeLoader 
			color="#000"
			cssOverride={override}
		/>
	);
};

export default Spinner;