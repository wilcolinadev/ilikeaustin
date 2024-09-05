import { handleGetEvents } from '../services/ticketmaster'
export default defineEventHandler(async () => {
  const response = await handleGetEvents('page=1&size=100&sort=date,asc')
  const data = await response
  return data
})
