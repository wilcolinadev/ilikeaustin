// Return JSON without any extra work!

export default defineEventHandler(async () => {
  const data = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=austin`
  )

  const response = await data.json()
  return response
})
