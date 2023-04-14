const validateValue = require('./validateValue')

describe('validate value', () => {
  test('correct value', () => {
    expect(validateValue(50)).toBe(true)
  })
  test('less then the correct value', () => {
    expect(validateValue(-1)).toBe(false)
  })
  test('above then the correct value', () => {
    expect(validateValue(101)).toBe(false)
  })
  test('boundary value min', () => {
    expect(validateValue(1)).toBe(true)
  })
  test('boundary value max', () => {
    expect(validateValue(100)).toBe(true)
  })
})
