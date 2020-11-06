import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsRequest } from 'store/app/actions';

const View = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		dispatch(fetchContactsRequest())
	}, [dispatch]);

	const contacts = useSelector(state => state.app.contacts)
	console.log('contacts :>> ', contacts);

	return (
		<div className={'page page--contacts'}>contacts</div>
	);
};

export { View };
