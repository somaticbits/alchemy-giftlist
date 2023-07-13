import server from "./server";
import niceList from "../../utils/niceList.json";

const Name = ({ setName, setAllowed, setProof, merkleTree }) => {
	const onChange = async (evt) => {
		const name = evt.target.value;
		setName(name);
		const index = niceList.findIndex(n => n === name);
		const proof = merkleTree.getProof(index);
		setProof(proof);
		if (name) {
			const { data: allowed } = await server.post(`/allow`, {
				name: name, proof: proof
			});
			setAllowed(allowed);
		}
	}

	return (
		<div className="container">
			<h1>Gift list checker</h1>
			<label>
				Input your name:
				<input type="text" name="name" onChange={onChange} placeholder="John Doe..."/>
			</label>
		</div>
	)
}

export default Name;