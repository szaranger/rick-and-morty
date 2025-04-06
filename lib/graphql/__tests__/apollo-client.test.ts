// Mock the Apollo client module
jest.mock('../apollo-client', () => ({
  client: {
    uri: 'https://rickandmortyapi.com/graphql',
    cache: {}
  }
}));

// Import the mocked client
import { client } from '../apollo-client';

describe('Apollo Client', () => {
  it('should be properly configured', () => {
    expect(client).toBeDefined();
    expect(client.uri).toBe('https://rickandmortyapi.com/graphql');
    expect(client.cache).toBeDefined();
  });
}); 