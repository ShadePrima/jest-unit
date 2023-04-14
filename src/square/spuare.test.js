const { test } = require('node:test')
const square = require('./spuare')

describe('square', () => {
  let mockValue
  //is called before each test
  beforeEach(() => {
    mockValue = Math.random()
    //added in BD
  })

  //is called once at the beging
  beforeAll(() => {})
  test('correct value', () => {
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined()
    expect(square(2)).toBeCalledTimes()
  })
  afterEach(() => {
    //delete BD
  })
  afterAll(() => {})
})
