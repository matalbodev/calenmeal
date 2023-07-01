import fetch from 'cross-fetch';

interface FetchOptions {
  agent?: unknown;
  body?: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: {
    [key: string]: string | string[];
  }
}

const env = import.meta.env;
const { VITE_API_URL } = env;

export default function customFetch(endpoint: string, options?: FetchOptions) {

  const mergedOptions = {
    ...options,
    headers: {
      ...options?.headers,
      accept: 'application/json',
      'content-type': 'application/json',
    },
  };


  return fetch(`${VITE_API_URL}${endpoint}`, mergedOptions);
}
