import {
	StyledActive,
	StyledButton,
	StyledImageProfile,
	StyledName,
	StyledRow,
	StyledUserDisplay,
	StyledUserInfo,
	StyledUsername
} from './user-row.styles';

const UserRow = ({ username, name, profileImage, active }) => {
	return (
		<StyledRow>
			<StyledUserDisplay>
				<StyledImageProfile src={profileImage} />
				<StyledUserInfo>
					<StyledName>{name}</StyledName>
					<StyledUsername>@{username}</StyledUsername>
				</StyledUserInfo>
			</StyledUserDisplay>
			<StyledActive $active={active}>
				{active ? 'Activo' : 'Inactivo'}
			</StyledActive>
			<StyledButton>Ver Detalles</StyledButton>
		</StyledRow>
	);
};

export default UserRow;
