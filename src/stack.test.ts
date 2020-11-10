import Stack from 'comp-sci-maths-lib/dist/dataStructures/stack/Stack';

test('Stack', () => {
    let myStack: Stack<number> = new Stack<number>();

    myStack.push(5)
    myStack.push(6)

    let popl = myStack.pop();

    expect(popl).toBe(6);
})