import { Container, CssBaseline, ThemeProvider } from '@mui/material'

import ThemeContext from './context/themeContext'

import Searcher from './components/Searcher'
import UserCard from './components/UserCard'

import { useTheme } from './hooks/useTheme'
import { useFetchGithubUser } from './hooks/useFetchGitbubUser'

const containerStyles = {

  width: '80vw',
  marginTop: '30px',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px'

}

function App () {
  console.log('a')
  const { data: userData, notfound, handleUserChange } = useFetchGithubUser()

  const { themes, mode, onThemeChange } = useTheme()

  return (
    <ThemeProvider theme={themes[mode]}>
      <ThemeContext.Provider value={{ mode, onThemeChange }}>
        <CssBaseline />
        <Container sx={{
          ...containerStyles,
          height: !userData ? '520px' : '550px',
          backgroundColor: `${mode === 'light' ? 'whitesmoke' : '#144272'}`,
          transition: `${themes[mode].transitions.create(['background-color', 'height'], {
          easing: themes[mode].transitions.easing.easeIn,
          duration: themes[mode].transitions.duration.shortest
        })}`
        }}
        >
          <Searcher handleUserChange={handleUserChange} notFound={notfound} />

          <UserCard user={userData} />
        </Container>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
