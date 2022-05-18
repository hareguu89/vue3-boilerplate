import axios, { AxiosResponse } from 'axios'

export const fetchMessage = async function (): Promise<AxiosResponse<string>> {
    const response = await axios.get('/message')
    return response.data.message
}
