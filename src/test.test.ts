import { describe, test, expect } from 'vitest'

const soma = (a: number, b: number) => a + b

describe('LocalStorageApi', () => {
  test('soma', () => {
    expect(soma(1, 2)).toBe(3)
  })
})
