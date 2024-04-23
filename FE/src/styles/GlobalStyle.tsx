import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, canvas, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		::-webkit-scrollbar {
    	  display: none;
  		}
	}

	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}

	ul, ol, li {
		list-style: none;
	}

	body {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		font-family: 'Pretendard';
		font-weight: 700;
		touch-action: none;
	}
	
	* {
		box-sizing: border-box;
		color: ${({ theme }) => theme.color.black1};
	}
	
	button, input {
  		border: 0;
	}

	.slick-dots {
		bottom: 40px;
	}

	.slick-dots li button::before {
    	color: ${({ theme }) => theme.color.blue};
		font-size: 10px;
    }

	.slick-dots li.slick-active button:before{
    	color: ${({ theme }) => theme.color.blue};
	}

`;

export default GlobalStyle;
