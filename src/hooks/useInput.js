import { useState } from 'react'

export const useInput = () => {
  const [input, setInput] = useState('')
  const onSearchInputChange = (event) => {
    console.log(event.target.value)
    setInput(event.target.value)
  }

  return {
    input,
    onSearchInputChange
  }
}
