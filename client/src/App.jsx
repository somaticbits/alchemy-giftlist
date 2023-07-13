import { useState, useEffect } from "react";
import "./App.scss";

import Name from "./Name";
import Badge from "./Badge";

import MerkleTree from "../../utils/merkleTree.js";
import niceList from "../../utils/niceList.json";

const App = () => {
	const [name, setName] = useState("");
	const [allowed, setAllowed] = useState(false);
	const [proof, setProof] = useState(null);
	const [merkleTree, setMerkleTree] = useState(null);

	useEffect(() => {
		setMerkleTree(new MerkleTree(niceList));
	}, [niceList]);

	useEffect(() => {
		console.log(allowed)
	}, [allowed]);

	return (
		<div className="app" style={{flexDirection: "column"}}>
			<Name setName={setName} setAllowed={setAllowed} setProof={setProof} proof={proof} merkleTree={merkleTree} />
			<Badge allowed={allowed} />
		</div>
	);
}

export default App;