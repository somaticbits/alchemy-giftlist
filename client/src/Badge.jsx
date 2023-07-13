const Badge = ({ allowed }) => {
	return (
		<div className="container badge" style={{ background: allowed? "green" : "red" }}>
			{allowed ? "You are on the nice list!" : "You are on the naughty list!"}
		</div>
	)
}

export default Badge;