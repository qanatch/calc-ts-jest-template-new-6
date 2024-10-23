import { MathOperations } from '../src/math-operations'

describe('MathOperations Class testing method add', () => {
  let mathOps: MathOperations

  test('should add two positive numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.add(2, 3)).toBe(5)
  })

  test('should add positive and negative numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.add(-3, 3)).toBe(0)
  })
})
describe('MathOperations Class testing method squaring', () => {
  let mathOps: MathOperations
  test('should squaring correctly positive number', () => {
    mathOps = new MathOperations()
    expect(mathOps.squaring(2)).toBe(4)
  })
  test('should squaring correctly negative number', () => {
    mathOps = new MathOperations()
    expect(mathOps.squaring(-2)).toBe(4)
  })
})
