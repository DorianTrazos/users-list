import styled from 'styled-components';

const StyledRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 16px;
	margin: 16px 0;
	box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
	border-radius: 12px;
	margin-left: auto;
	margin-right: auto;
`;

const StyledUserDisplay = styled.div`
	display: flex;
	align-items: center;
`;

const StyledImageProfile = styled.img`
	border-radius: 50%;
	width: 50px;
	margin-right: 16px;
`;

const StyledUserInfo = styled.div`
	width: 100px;
`;

const StyledName = styled.h2`
	font-size: 16px;
	margin: 4px 0;
`;

const StyledUsername = styled.p`
	font-size: 12px;
	margin: 0;
`;

const StyledActive = styled.span`
	color: ${({ $active }) => ($active ? '#13B176' : '#CE3131')};
	margin-right: 16px;
`;

const StyledButton = styled.button`
	font-size: 14px;
`;

export {
	StyledActive,
	StyledButton,
	StyledImageProfile,
	StyledName,
	StyledRow,
	StyledUserDisplay,
	StyledUserInfo,
	StyledUsername
};
