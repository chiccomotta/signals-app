import name from "../signals/name"

export const Setname = () => {
  function update() {
    const r = generateString(5)
    const l = generateString(5)

    name.value = { name: r, surname: l }
  }

  return (
    <div>
      {/* <Input size="sm" value={text} onChange={(e) => setText(e.target.value)} /> */}
      <button onClick={update}>Premi</button>
    </div>
  )
}

// program to generate random strings
// declare all characters
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const generateString = (length: number) => {
  let result = " "
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}
