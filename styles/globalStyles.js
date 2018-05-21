import { injectGlobal } from 'styled-components';
import { defaultTheme } from './theme';

injectGlobal`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  html,
  body {
    font-size: ${defaultTheme.body.fontSize}px;
    display: flex;
    align-items: stretch;
    overflow-x: hidden;
  }
  
  /* Default body styles */
  body {
    background: ${defaultTheme.body.bgColor};
    color: ${defaultTheme.body.fontColor};
    cursor: default;
    font-family: ${defaultTheme.body.fontFamily};
    font-weight: ${defaultTheme.body.fontWeight};
    line-height: ${defaultTheme.body.lineHeight};
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
  }
  
  .app-container {
    min-height: 100vh;
    height: 100%;
    width: 100%;    
  }
`;
