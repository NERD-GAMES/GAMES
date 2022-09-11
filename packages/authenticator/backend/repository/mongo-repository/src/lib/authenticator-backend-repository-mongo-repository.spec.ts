import { authenticatorBackendRepositoryMongoRepository } from './authenticator-backend-repository-mongo-repository';

describe('authenticatorBackendRepositoryMongoRepository', () => {
  it('should work', () => {
    expect(authenticatorBackendRepositoryMongoRepository()).toEqual(
      'authenticator-backend-repository-mongo-repository'
    );
  });
});
