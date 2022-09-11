```js
const StatefulRangeInput = () => {
  let [value, setValue] = React.useState('')

  return <RangeInput value={value} onChange={(value, event) => setValue(value)} />
}

;<StatefulRangeInput />
```
