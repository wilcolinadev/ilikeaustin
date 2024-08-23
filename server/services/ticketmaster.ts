export const handleGetEvents = async (params: string) => {
  let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TICKETMASTER_API_KEY}&city=austin`

  if (params) {
    url = url + `&${params}`
  }
  const response = await fetch(url)
  return response.json()
}
