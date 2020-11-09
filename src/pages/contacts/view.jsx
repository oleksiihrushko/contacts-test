import {
	AppstoreOutlined,
	BarsOutlined,
	CloseOutlined,
	ReloadOutlined,
} from "@ant-design/icons";
import { Form, Button, Checkbox, Select } from "antd";
import Search from "antd/lib/input/Search";
import { ContactList } from "components";
import { NATIONALITIES } from "constants/nationalities";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeContactsView, fetchContactsRequest } from "store/app/actions";
import getFilteredContacts from "./filter";
import "./style.scss";

const { Option } = Select;

const View = () => {
	const dispatch = useDispatch();
	const initialFilter = {
		name: null,
		gender: null,
		nat: null,
		changed: false,
	};

	const [filter, setFilter] = useState(initialFilter);

	const contacts = useSelector((state) => state.app.contacts);

	const [filtredContacts, setFiltredContacts] = useState(contacts);

	useEffect(() => {
		dispatch(fetchContactsRequest());
	}, [dispatch]);

	useEffect(() => {
		setFiltredContacts(contacts);
	}, [contacts]);

	useEffect(() => {
		setFiltredContacts(getFilteredContacts(contacts, filter));
	}, [filter, contacts]);

	const tableBtn = document.querySelector(".tableBtn");
	const listBtn = document.querySelector(".listBtn");

	const changeView = (view) => {
		localStorage.setItem("view", JSON.stringify(view));
		dispatch(changeContactsView(view));
		if (view === "table") {
			listBtn.classList.remove("ant-btn-primary");
			tableBtn.classList.add("ant-btn-primary");
		} else {
			tableBtn.classList.remove("ant-btn-primary");
			listBtn.classList.add("ant-btn-primary");
		}
	};

	const savedView = JSON.parse(localStorage.getItem("view"));
	savedView ? dispatch(changeContactsView(savedView)) : changeView("table");

	const [form] = Form.useForm();

	const onChange = (e, type) => {
		if (type === "name")
			setFilter({
				...filter,
				name: e.target.value ? e.target.value : null,
				changed: true,
			});
		if (type === "gender")
			setFilter({
				...filter,
				gender: e ? e.toLowerCase() : null,
				changed: true,
			});

		if (type === "nat")
			setFilter({
				...filter,
				nat: JSON.stringify(e) === JSON.stringify([]) ? null : e,
				changed: true,
			});
	};

	const nationalitiesNames = Object.values(NATIONALITIES).map(
		(item) => item.name
	);
	const children = [];

	for (let i = 0; i < nationalitiesNames.length; i++) {
		children.push(
			<Option key={nationalitiesNames[i]} value={nationalitiesNames[i]}>
				{nationalitiesNames[i]}
			</Option>
		);
	}

	return (
		<>
			<div className="control">
				<span className="control__title">Contacts</span>
				<div>
					<Button
						id="refresh"
						type="dashed"
						shape="circle"
						icon={<ReloadOutlined />}
						style={{ marginRight: "1vw" }}
					></Button>
					<Button
						className={
							savedView === "list"
								? "ant-btn-primary listBtn"
								: "listBtn"
						}
						onClick={() => changeView("list")}
						icon={<AppstoreOutlined />}
					></Button>
					<Button
						className={
							savedView === "table"
								? "ant-btn-primary tableBtn"
								: "tableBtn"
						}
						onClick={() => changeView("table")}
						icon={<BarsOutlined />}
					></Button>
				</div>
			</div>
			<div className="contactsForm__wrapper">
				<Form className="contactsForm" form={form} layout="inline">
					<Form.Item
						className="contactsForm__nameSearch"
						name="nameSearch"
					>
						<Search
							placeholder="Search by full name"
							allowClear
							onChange={(e) => onChange(e, "name")}
							style={{ margin: "0 1vw" }}
						/>
					</Form.Item>
					<Form.Item name="genderChange">
						<Select
							placeholder="Gender"
							style={{ width: 120 }}
							allowClear
							onChange={(e) => onChange(e, "gender")}
						>
							<Option value="Male">Male</Option>
							<Option value="Female">Female</Option>
							<Option value="Indeterminate">Indeterminade</Option>
						</Select>
					</Form.Item>
					<Form.Item name="natChange">
						<Select
							mode="multiple"
							allowClear
							style={{ width: 200 }}
							placeholder="Nationality"
							onChange={(e) => onChange(e, "nat")}
						>
							{children}
						</Select>
					</Form.Item>
					<Form.Item name="creatorCheckBox" valuePropName="checked">
						<Checkbox>I am creator</Checkbox>
					</Form.Item>
					<Form.Item name="resetBtn">
						{filter.changed ? (
							<Button
								type="text"
								onClick={() => {
									form.resetFields();
									setFilter(initialFilter);
								}}
							>
								<CloseOutlined />
								Clear
							</Button>
						) : (
							<Button type="text" disabled>
								<CloseOutlined />
								Clear
							</Button>
						)}
					</Form.Item>
				</Form>
			</div>
			<div className={"page page--contacts"}>
				{contacts ? (
					<ContactList contacts={filtredContacts} />
				) : (
					<div>Please wait...</div>
				)}
			</div>
		</>
	);
};

export { View };
