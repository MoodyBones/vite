class Stack {
  constructor() {
    this.top = -1
    this.items = {}
  }

  get peek() {
    return this.items[this.top]
  }

  push(item) {
    this.top++
    this.items[this.top] = item
  }
}

describe('My Stack', () => {
  let stack

  // add hook that runs before each test, so we don't need to set it up manually in each test
  beforeEach(() => {
    stack = new Stack()
  })

  it('is created empty', () => {
    // instantiate a class that doesn't exist to represent the object we're testing
    // const stack = new Stack() // refactored to reduce duplication

    // make sure our code does whats expected
    // because top is empty when it's first created the value should be -1
    // toBe is a jest matcher that checks for deep equality / object reference
    expect(stack.top).toBe(-1)

    // toEqual is a jest matcher that checks for value equality
    expect(stack.items).toEqual({})
  })

  it('can push to the top', () => {
    stack.push('🥑')
    expect(stack.top).toBe(0)
    expect(stack.peek).toBe('🥑') // peek is a method that returns the top item
  })

  it.todo('can pop off')
})
