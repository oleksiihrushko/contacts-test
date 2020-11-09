import { NATIONALITIES } from "constants/nationalities";
import React from "react";

const Dada = ({ contacts }) => {
	const maleCount = contacts?.reduce(
		(acc, item) => (item.gender === "male" ? (acc += 1) : acc),
		0
	);
	const femaleCount = contacts?.reduce(
		(acc, item) => (item.gender === "female" ? (acc += 1) : acc),
		0
	);
	const indeterminateCount = contacts?.length - maleCount - femaleCount;
	const nat = [];
	contacts &&
		contacts.forEach(
			(item) => !nat.includes(item.nat) && nat.push(item.nat)
		);

	return (
		<>
			{contacts && (
				<div className="contacts__footer">
					<h2>Statistics</h2>
					<div className="contacts__footer--gender">
						<div className="gender__wrapper">
							<p className="gender__title">Collection size</p>
							<p className="gender__count">{contacts.length}</p>
						</div>
						<div>
							<div style={{ display: "flex" }}>
								<div className="gender__wrapper">
									<p className="gender__title">Males</p>
									<p className="gender__count">{maleCount}</p>
								</div>
								<div className="gender__wrapper">
									<p className="gender__title">Females</p>
									<p className="gender__count">
										{femaleCount}
									</p>
								</div>
								<div className="gender__wrapper">
									<p className="gender__title">
										Indeterminate
									</p>
									<p className="gender__count">
										{indeterminateCount}
									</p>
								</div>
							</div>
							<span className="gender__dominate">
								{indeterminateCount > contacts.length / 3
									? "Indeterminate"
									: maleCount > femaleCount
									? "Men"
									: "Women"}{" "}
								predominate
							</span>
						</div>
					</div>
					<p style={{ marginBottom: "1vh", color: "grey" }}>
						Nationalities
					</p>
					<ul className="contacts__footer--nat">
						{nat?.map((item) => (
							<li key={item}>
								<p>
									<span
										style={{
											fontWeight: "bold",
											color: "black",
										}}
									>
										{NATIONALITIES[item].name}
									</span>
									{": "}
									<span
										style={{
											color: "grey",
										}}
									>
										{contacts.reduce(
											(acc, contact) =>
												contact.nat === item
													? (acc += 1)
													: acc,
											0
										)}{" "}
										contacts
									</span>
								</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default Dada;
