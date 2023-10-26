import { TextEncoder } from 'util';
import nock from 'nock';
import '@testing-library/jest-dom';

global.TextEncoder = TextEncoder;

global.beforeEach(() => {
  const apiMock = nock('http://127.0.0.1:3102/api');

  // We need to setup these headers until we use withCredentials parameter in axios requests
  apiMock.defaultReplyHeaders({
    'access-control-allow-origin': '*',
    'access-control-allow-credentials': 'true'
  });

  // axios makes OPTIONS request before PATCH and DELETE requests
  apiMock.persist().options(/.*/).reply(200);

  (global as any).apiMock = apiMock;
});

global.afterEach(() => {
  nock.cleanAll();
  jest.clearAllMocks();
});
