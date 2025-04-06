import '@testing-library/jest-dom';

declare module '@testing-library/react' {
  export * from '@testing-library/react';
}

declare module '@testing-library/jest-dom' {
  export interface Matchers<R> {
    toBeInTheDocument(): R;
    toHaveTextContent(text: string): R;
  }
} 