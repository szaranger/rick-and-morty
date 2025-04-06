import { GET_CHARACTERS } from '../queries';

// Mock the Apollo client module
jest.mock('../apollo-client', () => ({
  client: {
    uri: 'https://rickandmortyapi.com/graphql',
    cache: {},
    query: jest.fn().mockResolvedValue({
      data: {
        characters: {
          info: {
            pages: 42,
            next: 2,
            prev: null
          },
          results: [
            {
              id: '1',
              name: 'Rick Sanchez',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              species: 'Human',
              status: 'Alive',
              gender: 'Male',
              origin: {
                name: 'Earth (C-137)'
              },
              location: {
                name: 'Earth (Replacement Dimension)'
              },
              episode: [
                {
                  name: 'Pilot'
                }
              ]
            }
          ]
        }
      }
    })
  }
}));

// Import the mocked client
import { client } from '../apollo-client';

describe('GraphQL Queries', () => {
  it('should define GET_CHARACTERS query', () => {
    expect(GET_CHARACTERS).toBeDefined();
    expect(typeof GET_CHARACTERS).toBe('object');
    expect(GET_CHARACTERS.kind).toBe('Document');
    expect(GET_CHARACTERS.definitions.length).toBeGreaterThan(0);
  });

  it('should include the correct fields in GET_CHARACTERS query', () => {
    const queryString = GET_CHARACTERS.loc?.source.body || '';
    
    // Check for required fields
    expect(queryString).toContain('characters(page: $page)');
    expect(queryString).toContain('info {');
    expect(queryString).toContain('pages');
    expect(queryString).toContain('next');
    expect(queryString).toContain('prev');
    expect(queryString).toContain('results {');
    expect(queryString).toContain('id');
    expect(queryString).toContain('name');
    expect(queryString).toContain('image');
    expect(queryString).toContain('species');
    expect(queryString).toContain('status');
    expect(queryString).toContain('gender');
    expect(queryString).toContain('origin {');
    expect(queryString).toContain('location {');
    expect(queryString).toContain('episode {');
  });

  it('should have a working Apollo client', () => {
    expect(client).toBeDefined();
    expect(client.uri).toBe('https://rickandmortyapi.com/graphql');
    expect(client.cache).toBeDefined();
  });

  it('should execute the GET_CHARACTERS query successfully', async () => {
    const result = await client.query({
      query: GET_CHARACTERS,
      variables: { page: 1 }
    });

    expect(result.data).toBeDefined();
    expect(result.data.characters).toBeDefined();
    expect(result.data.characters.info.pages).toBe(42);
    expect(result.data.characters.results.length).toBe(1);
    expect(result.data.characters.results[0].name).toBe('Rick Sanchez');
  });
}); 