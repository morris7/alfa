export function createMockFetchSuccess(response) {
  const mockSuccessResponse = response;
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  return Promise.resolve({ json: () => mockJsonPromise });
}

export function createMockFetchFailure(response) {
  const mockSuccessResponse = response;
  const mockJsonPromise = Promise.reject(mockSuccessResponse);
  return Promise.resolve({ json: () => mockJsonPromise });
}
