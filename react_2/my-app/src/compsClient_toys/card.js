import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const MyCards = () => {
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className="bg-dark"  id="PaymentForm">
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
			<form  action="">
				<input className="d-block"
					type="number"
					name="cvc"
					placeholder="CVC"
					onChange={handleInputChange}
				/>
				<input className="d-block"
					type="date"
					name="expiry"
					placeholder="Expire Date"
					onChange={handleInputChange}
				/>
				<input className="d-block"
					type="text"
					name="name"
					placeholder="Your Name"
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="number"
					placeholder="Card Number"
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
};

export default MyCards;