import { useEffect, useState } from 'react'
import getUser from '../services/users'

export const useFetchGithubUser = () => {
  const [user, setUser] = useState('Octocat')
  const [data, setData] = useState({})
  const [notfound, setNotfound] = useState(false)
  const getGithubUser = async (user) => {
    try {
      const githubUser = await getUser(user)
      if (githubUser.message === 'Not Found') {
        setNotfound(true)
        return
      }
      setData(githubUser)
    } catch (error) {
      console.log({ error })
    }
  }

  const handleUserChange = (userName) => {
    setUser(userName)
  }

  const cleanNotFound = () => {
    setNotfound(false)
  }

  useEffect(() => {
    getGithubUser(user)
  }, [user])

  useEffect(() => {
    const interval = setTimeout(() => {
      cleanNotFound()
    }, 3000)
    return () => {
      clearTimeout(interval)
    }
  }, [notfound])

  return {
    data,
    notfound,
    handleUserChange
  }
}
