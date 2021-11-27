import autoBind from 'auto-bind'
import endpoints from 'constants/endpoints'

class APIClient {
  server: string
  endpoints = endpoints
  mode: any

  constructor(props: { SERVER: 'PROD' | 'DEV' | 'STAGING' }) {
    this.server = getServerUrl(props.SERVER)
    this.mode = props.SERVER
    autoBind(this)
  }

  async fetch<T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
    data: FormData | any = undefined
  ): Promise<T> {
    const body = JSON.stringify(data)
    const headers = { 'Content-Type': 'application/json' }

    return await fetch(`${this.server}${url}`, { method, body, headers }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw { name: 'Fetch error', response: res }
    })
  }

  // //example
  // getexamples(): Promise<{ data: Iexample[] }> {
  //   return this.fetch(this.endpoints.example, 'GET')
  // }
  // getexample(id: string): Promise<{ data: Iexample }> {
  //   return this.fetch(this.endpoints.example(id), 'GET')
  // }
  // postexample(body: Iexample): Promise<{ data: Iexample }> {
  //   return this.fetch(this.endpoints.example, 'POST', body)
  // }
  // putexample(params: { body: Iexample; _id: string }): Promise<{ data: Iexample }> {
  //   return this.fetch(this.endpoints.example(params._id), 'PUT', params.body)
  // }
  // deleteexample(_id: string): Promise<{ data: Iexample }> {
  //   return this.fetch(this.endpoints.example(_id), 'DELETE')
  // }
}

function getServerUrl(mode: 'PROD' | 'DEV' | 'STAGING') {
  switch (mode) {
    case 'STAGING':
      return process.env.REACT_APP_BACKEND_SERVER_URL!
    case 'PROD':
      return process.env.REACT_APP_BACKEND_SERVER_URL!
    default:
      return 'http://localhost:5000/'
  }
}

const prod_or_dev_server = process.env.NODE_ENV === 'production' ? 'PROD' : 'STAGING'
const apiClient = new APIClient({ SERVER: prod_or_dev_server })

export { apiClient }
export default APIClient
