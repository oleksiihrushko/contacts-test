import axios from "axios";
import { randomIntegerInRange } from "utils";

const collectionSize = randomIntegerInRange(20, 30);

export const getContacts = async () => {
	return axios(`https://randomuser.me/api/?results=${collectionSize}`).then(
		(data) => data.data.results
	);
};
