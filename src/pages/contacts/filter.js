import { NATIONALITIES } from "constants/nationalities";

const getFilteredContacts = (contacts, filterObj) => {
	let filtred = contacts;

	if (filterObj.name)
		filtred = contacts.filter(
			(contact) =>
				contact.name.first
					.toLowerCase()
					.includes(filterObj.name.toLowerCase()) ||
				contact.name.last
					.toLowerCase()
					.includes(filterObj.name.toLowerCase())
		);

	if (filterObj.gender)
		filtred = filtred.filter(
			(contact) => contact.gender === filterObj.gender
		);

	if (filterObj.nat)
		filtred = filtred.filter((contact) =>
			filterObj.nat.includes(NATIONALITIES[contact.nat].name)
		);

	return filtred;
};

export default getFilteredContacts;
