import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      grey: string;
      orange: string;
      typography: string;
      border: string;
      titleColor: string;
    };
  }
}
