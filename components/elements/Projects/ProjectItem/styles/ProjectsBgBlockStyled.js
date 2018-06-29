import styled from 'styled-components';
import { defaultTheme } from '../../../../../styles/theme';

const pattern = [
  `
    width: 50px;
    height: 330px;
    top: 5%;
    left: -35%;
    background: linear-gradient(-130deg, ${defaultTheme.colorProjects.reactackle}, palevioletred);
  `,

  `
    height: 80px;
    width: 210px;
    left: -50%;
    background: linear-gradient(-130deg, #055AAF, palevioletred);
  `,
];

export const ProjectsBgBlockStyled = styled.div`
  display: none;
  position: absolute;
  z-index: 0;
  
  @media only screen and (min-width: 40em) {
    display: block;
  }
  
  ${props => pattern[props.patternId - 1]}
`;
