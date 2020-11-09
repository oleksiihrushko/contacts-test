import Paragraph from "antd/lib/typography/Paragraph";
import { NATIONALITIES } from "constants/nationalities";
import React from "react";
import * as colors from "@ant-design/colors";

const ContactCard = ({ contact }) => {
	return (
		<div className="contacts__card">
			<img
				className="contacts__card--img"
				src={contact.picture.large}
				alt={contact.name.first}
			/>
			<p className="contacts__card--name">
				{contact.name.title +
					". " +
					contact.name.first +
					" " +
					contact.name.last}
				<span> ({contact.dob.age} years)</span>
			</p>
			<div className="contacts__card--email">
				<Paragraph
					className="paragraph"
					copyable={{ text: contact.email }}
				></Paragraph>
				<a href={`mailto: ${contact.email}`}> {contact.email}</a>
			</div>
			<div className="contacts__card--phone">
				<Paragraph
					className="paragraph"
					copyable={{ text: contact.phone }}
				></Paragraph>
				<a href={`tel: ${contact.phone}`}> {contact.phone}</a>
			</div>
			<div className="contacts__card--location">
				<Paragraph
					className="paragraph"
					copyable={{
						text:
							contact.location.country +
							" " +
							contact.location.street.number +
							" " +
							contact.location.street.name +
							" " +
							contact.location.city +
							" " +
							contact.location.postcode,
					}}
				></Paragraph>
				<span className="country"> /{contact.location.country}/</span>
				<p>
					{contact.location.street.number +
						" " +
						contact.location.street.name}
				</p>
				<p>{contact.location.city + " " + contact.location.postcode}</p>
			</div>
			<div
				style={{
					backgroundColor:
						NATIONALITIES[contact.nat].color === undefined
							? "white"
							: NATIONALITIES[contact.nat].color.slice(0, 1) ===
							  "#"
							? NATIONALITIES[contact.nat].color
							: colors[NATIONALITIES[contact.nat].color][1],
					borderColor:
						NATIONALITIES[contact.nat].color === undefined
							? "grey"
							: NATIONALITIES[contact.nat].color.slice(0, 1) ===
							  "#"
							? "transparent"
							: colors[NATIONALITIES[contact.nat].color][5],
					color:
						NATIONALITIES[contact.nat].color === undefined
							? "grey"
							: NATIONALITIES[contact.nat].color.slice(0, 1) ===
							  "#"
							? "white"
							: colors[NATIONALITIES[contact.nat].color][5],
				}}
				data-id="locale"
			>
				{NATIONALITIES[contact.nat].name}
			</div>
		</div>
	);
};

export default ContactCard;
