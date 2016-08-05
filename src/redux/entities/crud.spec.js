import { given, shouldEqual } from 'circumstance';
import * as CRUD from './crud';

describe('CRUD Entity', () => {
  it('should init state', () => {
    given(CRUD.initState())
    .then(CRUD.isInitialState, shouldEqual(true));
  });

  it('should handle waiting state', () => {
    given(CRUD.initState())
    .when(CRUD.handleWaiting())
    .then(CRUD.isWaiting, shouldEqual(true));
  });

  it('should handle success state', () => {
    given(CRUD.initState())
    .when(CRUD.handleSuccess('Operation Success'))
    .then(CRUD.isSuccess, shouldEqual(true));
  });

  it('should handle fail state', () => {
    given(CRUD.initState())
    .when(CRUD.handleFail('has some exceptions'))
    .then(CRUD.isFailure, shouldEqual(true));
  });
});
