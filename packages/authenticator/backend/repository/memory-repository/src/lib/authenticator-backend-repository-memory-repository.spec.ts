import { authenticatorBackendRepositoryMemoryRepository } from './authenticator-backend-repository-memory-repository';

describe('authenticatorBackendRepositoryMemoryRepository', () => {
  it('should work', () => {
    expect(authenticatorBackendRepositoryMemoryRepository()).toEqual(
      'authenticator-backend-repository-memory-repository'
    );
  });
});
