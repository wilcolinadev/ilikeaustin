import { handleGetEvents } from '../services/ticketmaster'
export default defineEventHandler(async () => {
  const response = await handleGetEvents('page=1&size=21')
  const data = await response
  return data
})
