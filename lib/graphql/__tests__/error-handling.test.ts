import { GET_CHARACTERS } from '../queries';

// Mock the Apollo client module with error handling
jest.mock('../apollo-client', () => ({
  client: {
    uri: 'https://rickandmortyapi.com/graphql',
    cache: {},
    query: jest.fn().mockImplementation(({ variables }) => {
      if (variables.page < 1) {
        return Promise.reject(new Error('Page number must be greater than 0'));
      }
      if (variables.page > 42) {
        return Promise.reject(new Error('Page number exceeds maximum pages'));
      }
      return Promise.resolve({
        data: {
          characters: {
            info: {
              pages: 42,
              next: variables.page < 42 ? variables.page + 1 : null,
              prev: variables.page > 1 ? variables.page - 1 : null
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
      });
    })
  }
}));

// Import the mocked client
import { client } from '../apollo-client';

describe('GraphQL Error Handling', () => {
  it('should handle invalid page numbers', async () => {
    await expect(client.query({
      query: GET_CHARACTERS,
      variables: { page: 0 }
    })).rejects.toThrow('Page number must be greater than 0');
  });

  it('should handle page numbers exceeding maximum pages', async () => {
    await expect(client.query({
      query: GET_CHARACTERS,
      variables: { page: 43 }
    })).rejects.toThrow('Page number exceeds maximum pages');
  });

  it('should handle network errors', async () => {
    // Mock a network error
    jest.spyOn(client, 'query').mockRejectedValueOnce(new Error('Network error'));
    
    await expect(client.query({
      query: GET_CHARACTERS,
      variables: { page: 1 }
    })).rejects.toThrow('Network error');
  });

  it('should return valid data for valid page numbers', async () => {
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