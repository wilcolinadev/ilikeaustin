// Return JSON without any extra work!

import { handleGetTripavisorHotels } from '../services/tripadvisor'
export default defineEventHandler(async () => {
  const response = await handleGetTripavisorHotels()
  const data = await response
  return data
})
