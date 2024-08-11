// Return JSON without any extra work!
import { getAuthorization, handleGetActivities } from '../services/amadeus'

export default defineEventHandler(async () => {
  const response = await getAuthorization()
  const tokenData = await response.json()
  const token = await tokenData.access_token

  const response2 = await handleGetActivities(token)
  const data = await response2.json()
  return data
})
