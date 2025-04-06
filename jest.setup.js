// This file is used to set up the Jest testing environment

import '@testing-library/jest-dom';

// Extend Jest matchers
expect.extend({
  toBeInTheDocument(received) {
    const pass = received !== null;
    if (pass) {
      return {
        message: () => `expected ${received} not to be in the document`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be in the document`,
        pass: false,
      };
    }
  },
  toHaveValue(received, expected) {
    const pass = received.value === expected;
    if (pass) {
      return {
        message: () => `expected ${received} not to have value ${expected}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to have value ${expected}`,
        pass: false,
      };
    }
  },
  toHaveAttribute(received, attr, value) {
    const pass = received.hasAttribute(attr) && (!value || received.getAttribute(attr) === value);
    if (pass) {
      return {
        message: () => `expected ${received} not to have attribute ${attr}${value ? ` with value ${value}` : ''}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to have attribute ${attr}${value ? ` with value ${value}` : ''}`,
        pass: false,
      };
    }
  },
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock the Chakra UI components
jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useDisclosure: () => ({
    isOpen: true,
    onOpen: jest.fn(),
    onClose: jest.fn(),
  }),
}));

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

// Add any global test setup here
beforeAll(() => {
  // Setup code that runs before all tests
});

afterAll(() => {
  // Cleanup code that runs after all tests
}); 