import { useState } from 'react';
import Filters from '../filters/Filters';
import UserRow from '../user-row/UserRow';

const UsersList = ({ initialUsers }) => {
	const [search, setSearch] = useState('');
	const [onlyActive, setOnlyActive] = useState(false);
	const [sortBy, setSortBy] = useState('default');

	let filteredUsers = filterActiveUsers(initialUsers, onlyActive);
	filteredUsers = filterUsersByName(filteredUsers, search);
	filteredUsers = sortUsers(filteredUsers, sortBy);

	return (
		<div>
			<h1>Listado de usuarios</h1>
			<Filters
				search={search}
				setSearch={setSearch}
				onlyActive={onlyActive}
				setOnlyActive={setOnlyActive}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>

			{filteredUsers.map(user => (
				<UserRow key={user.userId} {...user} />
			))}
		</div>
	);
};

const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCasedSearch = search.toLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().includes(lowerCasedSearch)
	);
};

const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter(user => user.active);
};

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	if (sortBy === 'default') return sortedUsers;
	if (sortBy === 'name') {
		return sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
	}
};

export default UsersList;
