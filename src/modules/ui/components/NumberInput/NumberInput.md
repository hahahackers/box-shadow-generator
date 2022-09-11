```js
const StatefulNumberInput = () => {
  let [value, setValue] = React.useState('')

  return <NumberInput value={value} onChange={(event) => setValue(event.target.value)} />
}

;<StatefulNumberInput />
```
