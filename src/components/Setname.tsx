import name from "../signals/name"
import { fakerIT as faker } from "@faker-js/faker"

export const Setname = () => {
  function update() {
    const r = faker.person.firstName()
    const l = faker.person.lastName()

    name.value = { name: r, surname: l }
  }

  return (
    <div>
      {/* <Input size="sm" value={text} onChange={(e) => setText(e.target.value)} /> */}
      <button onClick={update} style={{ color: "blue", borderColor: "black" }}>
        Premi
      </button>
    </div>
  )
}
