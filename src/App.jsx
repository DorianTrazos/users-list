import MainContainer from './components/main-container/MainContainer';
import UsersList from './components/users-list/UsersList';
import { USERS } from './constants/users';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<MainContainer>
				<UsersList initialUsers={USERS} />
			</MainContainer>
		</>
	);
};

export default App;
