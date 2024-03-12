import { computed } from "@preact/signals-react"

import name from "../signals/name"
const hello = computed(() => "Hello " + name.value.name + " " + name.value.surname)

export const ComputedComponent = () => {
  return <div>{hello.value}</div>
}
