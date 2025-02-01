import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
	/* Global Reset and Base Typography */
	body {
		margin: 0;
		padding: 20px;
		font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
		font-size: 16px;
		line-height: 1.5;
		background: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.text};
	}
	h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0 0 1rem 0;
  }
`