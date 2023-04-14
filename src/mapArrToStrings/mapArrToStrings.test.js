const mapArrToString = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
  test('correct value', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test('different value', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'qwerty'])).toEqual([
      '1',
      '2',
      '3',
    ])
  })
  test('empty arr', () => {
    expect(mapArrToString([])).toEqual([])
  })
  test('denying', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4])
  })
})
