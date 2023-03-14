class Stack {
  constructor() {
    this.top = -1
    this.items = {}
  }
}

describe('My Stack', () => {
  it('is created empty', () => {
    // instantiate a class that doesn't exist to represent the object we're testing
    const stack = new Stack()

    // make sure our code does whats expected
    // because top is empty when it's first created the value should be -1
    // toBe is a jest matcher that checks for deep equality / object reference
    expect(stack.top).toBe(-1)

    // toEqual is a jest matcher that checks for value equality
    expect(stack.items).toEqual({})
  })

  it.todo('can push to the top')

  it.todo('can pop off')
})
