import React, { useState } from "react";
import { useSelector } from "react-redux";
import { List, Card, Table } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import { NATIONALITIES } from "constants/nationalities";
import {
	red,
	volcano,
	gold,
	yellow,
	lime,
	green,
	cyan,
	blue,
	geekblue,
	purple,
	magenta,
	grey,
	orange,
} from "@ant-design/colors";

import "./style.scss";

const colors = {
	red,
	volcano,
	gold,
	yellow,
	lime,
	green,
	cyan,
	blue,
	geekblue,
	purple,
	magenta,
	grey,
	orange,
};

const View = ({ contacts }) => {
	const [fooKey, setFooKey] = useState(true);

	const view = useSelector((state) => state.app.view);

	const refreshBtn = document.getElementById("refresh");
	const refreshContacts = () => {
		setFooKey(!fooKey);
		refreshBtn.removeEventListener("click", refreshContacts);
	};
	refreshBtn.addEventListener("click", refreshContacts);

	const columns = [
		{
			title: "Avatar",
			width: "7vw",
			dataIndex: ["picture", "thumbnail"],
			fixed: "left",
			render: (text) => <img className="avatar" src={text} alt={text} />,
		},
		{
			title: "Full name",
			dataIndex: ["name", "title"],
			sorter: (a, b) => a.name.first.localeCompare(b.name.first),
			render: (text, row) => (
				<span>{text + " " + row.name.first + " " + row.name.last}</span>
			),
		},
		{
			title: "Birthday",
			dataIndex: ["dob", "date"],
			render: (text, row) => (
				<span>
					{new Date(text.slice(0, 19)).toLocaleDateString("en-US", {
						weekday: "long",
						year: "numeric",
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric",
						second: "numeric",
					})}
					<br />
					<span>{row.dob.age + " years"}</span>
				</span>
			),
		},
		{
			title: "Email",
			dataIndex: ["email"],
			width: "17vw",
			render: (text) => (
				<>
					<Paragraph
						className="paragraph"
						copyable={{ text: text }}
					></Paragraph>
					<a href={`mailto: ${text}`}>
						{" "}
						{text.length > 15 && `${text.slice(0, 15)}...`}
					</a>
				</>
			),
		},
		{
			title: "Phone",
			dataIndex: ["phone"],
			width: "15vw",
			render: (text) => (
				<>
					<Paragraph
						className="paragraph"
						copyable={{ text: text }}
					></Paragraph>
					<a href={`tel: ${text}`}> {text}</a>
				</>
			),
		},
		{
			title: "Location",
			dataIndex: ["location", "country"],
			render: (text, row) => (
				<>
					<Paragraph
						className="paragraph"
						copyable={{
							text:
								text +
								" " +
								row.location.street.number +
								" " +
								row.location.street.name +
								" " +
								row.location.city +
								" " +
								row.location.postcode,
						}}
					></Paragraph>
					<span className="country"> /{text}/</span>
					<p>
						{row.location.street.number +
							" " +
							row.location.street.name}
					</p>
					<p>{row.location.city + " " + row.location.postcode}</p>
				</>
			),
		},
		{
			title: "Nationality",
			dataIndex: ["nat"],
			width: "12vw",
			render: (text) => (
				<div
					style={{
						backgroundColor:
							NATIONALITIES[text].color === undefined
								? "white"
								: NATIONALITIES[text].color.slice(0, 1) === "#"
								? NATIONALITIES[text].color
								: colors[NATIONALITIES[text].color][1],
						borderColor:
							NATIONALITIES[text].color === undefined
								? "grey"
								: NATIONALITIES[text].color.slice(0, 1) === "#"
								? "transparent"
								: colors[NATIONALITIES[text].color][5],
						color:
							NATIONALITIES[text].color === undefined
								? "grey"
								: NATIONALITIES[text].color.slice(0, 1) === "#"
								? "white"
								: colors[NATIONALITIES[text].color][5],
					}}
					data-id="locale"
				>
					{NATIONALITIES[text].name}
				</div>
			),
		},
	];

	return (
		<div className="contacts__wrapper">
			{view === "table" && (
				<Table
					key={fooKey}
					dataSource={contacts}
					rowKey="email"
					columns={columns}
					scroll={{ x: 1300 }}
				/>
			)}
			{view === "list" && (
				<List
					key={!fooKey}
					grid={{ gutter: 16, column: 3 }}
					dataSource={contacts}
					renderItem={(item) => (
						<List.Item>
							<Card title={item.email}>Card content</Card>
						</List.Item>
					)}
				/>
			)}
		</div>
	);
};

export { View };
