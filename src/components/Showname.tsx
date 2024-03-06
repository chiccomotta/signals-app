import name from "../signals/name"

export const Showname = () => {
  const obj = name.value
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <p style={{ border: "2px solid black" }}>{obj.name}</p>
      <p style={{ border: "2px solid black" }}>{obj.surname}</p>
    </div>
  )
}
