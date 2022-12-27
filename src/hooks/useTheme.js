import { createTheme } from '@mui/material'
import { useState } from 'react'

export const useTheme = () => {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#0A2647',
        paper: '#205295'
      }
    }
  })
  const ligthTheme = createTheme({})

  const themes = {
    light: ligthTheme,
    dark: darkTheme
  }

  const onThemeChange = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return {
    themes,
    mode,
    onThemeChange
  }
}
