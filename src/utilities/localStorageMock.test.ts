import { describe, it, expect } from 'vitest';
import { LocalStorageMock } from './localStorageMock.ts';

describe('localStorageMock', () => {
  it('Saves a key-value pair given two strings', () => {
  //   Setup
    const localStorageMock = new LocalStorageMock();

  //   Exercise
    localStorageMock.setItem('key', 'value')

  //   Verify
    expect(localStorageMock.getItem('key')).toEqual('value')
  })

  it('Returns a value given a key, with each being strings', () => {
    //   Setup
    const localStorageMock = new LocalStorageMock();
    localStorageMock.setItem('key', 'value')
    localStorageMock.setItem('key2', 'value2')

    //   Exercise
    const value = localStorageMock.getItem('key')
    const value2 = localStorageMock.getItem('key2')

    //   Verify
    expect(value).toEqual('value')
    expect(value2).toEqual('value2')
  })
});