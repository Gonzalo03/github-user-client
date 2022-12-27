import { useContext } from 'react'

import { useInput } from '../../hooks/useInput'

import { IconButton, Stack, TextField } from '@mui/material'
import { Search, DarkMode, LightMode } from '@mui/icons-material'

import ThemeContext from '../../context/themeContext'

const stackStyles = {
  marginTop: '30px',
  width: '80%',
  alignItems: 'flex-start'
}

const textFieldStyles = {
  width: '90%'

}

const iconSearchButtonStyle = {
  left: '-45px'
}
const iconDarkModeButtonStyle = {
  right: '-45px'
}

const Searcher = (props) => {
  const { handleUserChange, notFound } = props

  const { input, onSearchInputChange } = useInput(handleUserChange)

  const { mode, onThemeChange } = useContext(ThemeContext)

  const handleSubmit = () => {
    handleUserChange(input)
  }

  return (
    <Stack direction='row' sx={stackStyles}>
      <TextField
        error={notFound}
        sx={textFieldStyles}
        id={`outlined-${notFound ? 'outlined-error-helper-text' : 'serach'}`}
        helperText={`${notFound ? 'try to set a existing user' : ''}`}
        label='Github user'
        variant='outlined'
        placeholder='Octocat'
        size='small'
        value={input}
        onChange={onSearchInputChange}
      />
      <IconButton
        sx={iconSearchButtonStyle}
        onClick={handleSubmit}
      >
        <Search />
      </IconButton>
      <IconButton sx={iconDarkModeButtonStyle} onClick={onThemeChange}>
        {
          mode === 'dark' ? <LightMode /> : <DarkMode />
        }
      </IconButton>
    </Stack>
  )
}

export default Searcher
