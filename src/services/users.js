import { urlFetch } from '../constants/urlFetch'

const getUser = async (user) => {
  const response = await window.fetch(`${urlFetch}/${user}`, {
    method: 'GET'
  })
  const payload = await response.json()

  return payload
}

export default getUser
