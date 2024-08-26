import dayjs from 'dayjs'
const austinGeoId: number = 30196
export const handleGetTripavisorHotels = async (
  page: number = 1,
  startDate = dayjs().format('YYYY-MM-DD'),
  endDate = dayjs().add(1, 'day').format('YYYY-MM-DD')
) => {
  const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?pageNumber=${page}&pageSize=10&geoId=${austinGeoId}&checkIn=${startDate}&checkOut=${endDate}&currencyCode=USD`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.TRIPADVISOR_API_KEY as string,
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}
