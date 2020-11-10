import { calcAreaSquare, calcAreaTriangle, calcAreaCircle } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test('Area Circle', () => {
    expect(calcAreaCircle(5)).toBe(78.53975);
})