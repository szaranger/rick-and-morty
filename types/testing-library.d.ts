import '@testing-library/jest-dom';

declare module '@testing-library/react' {
  export * from '@testing-library/react';
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string): R;
    }
  }
}

declare module '@testing-library/jest-dom' {
  export interface Matchers<R> {
    toBeInTheDocument(): R;
    toHaveTextContent(text: string): R;
    toHaveStyle(style: Record<string, any>): R;
    toHaveAttribute(attr: string, value?: string): R;
  }
} 