import { axiosClient } from './axios-config'

const request = () => {
  const get = async (url: string) => {
    return await axiosClient.get(url).then(response => response)
  }

  const post = async (url: string, payload: object) => {
    return await axiosClient.post(url, payload).then(response => response)
  }

  const patch = async (url: string, payload: object) => {
    return await axiosClient.patch(url, payload).then(response => response)
  }

  const remove = async (url: string) => {
    return await axiosClient.delete(url).then(response => response)
  }
  return {
    get,
    post,
    patch,
    remove,
  }
}

export default request
