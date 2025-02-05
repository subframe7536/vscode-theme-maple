export function App(cls: string[]) {
  for (let i = 0; i < cls.length; i++) {
    // [TODO]
    const result = checkCondition(cls[i]);
    if (result !== null) {
      alert(`${i}: ${result}, @test`);
    }
  }

  return (
    <TestProvider>
      <button onClick={console.log}>
        Hello
      </button>
    </TestProvider>
  )
}