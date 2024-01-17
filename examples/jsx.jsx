function $initHighlight(block, cls) {
  for (let i = 0; i < cls.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <a-component test="a">{block}</a-component>
      <div><span>test</span></div>
    </div>
  )
}
