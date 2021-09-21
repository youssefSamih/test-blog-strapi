import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*, ::after, ::before {
    box-sizing: border-box;
  }
	body {
		color: #60697b;
		font-size: .8rem;
    font-weight: 500;
    line-height: 1.7;
    color: #60697b;
		display: flex;
    justify-content: center;
		font-family: 'Aria', sans-serif;
	}
`;
