import 'styled-components';
import { theme } from '../styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: string;
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
        secondaryGray: string;
        borderGray: string;
        textGray: string;
      };
    };
  }
}
