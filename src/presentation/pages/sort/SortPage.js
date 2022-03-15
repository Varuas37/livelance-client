import React from "react";
import { useParams } from "react-router-dom";
import AppHeader from "../../components/appheader/AppHeader";

const SortPage = () => {
	const { sortterm } = useParams();

	return <div>
        <AppHeader/>
    </div>;
};

export default SortPage;
