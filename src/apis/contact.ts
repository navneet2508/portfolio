import { postRequest } from './index'

const postContact = async (body: object) => {
  return await postRequest('/api/user/contact', body)
}

export { postContact }
