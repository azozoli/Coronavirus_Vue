import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.covid19api.com`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getSummary() {
    return apiClient.get('/summary')
  },
  getCountrySummary(countrySlug) {
    return apiClient.get('/premium/country/testing/' + countrySlug)
  },
  getCountries() {
    return apiClient.get('/countries')
  },
  getCasesByDateCountry(date, country) {
    console.log(country.Slug)
    return apiClient.get(
      '/live/country/' +
        country.Slug +
        '/status/confirmed/date/' +
        date.toISOString()
    )
  }
}
