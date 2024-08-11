export const getAuthorization = async () => {
  const url = 'https://test.api.amadeus.com/v1/security/oauth2/token'

  const token = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${process.env.AMADEUS_API_KEY}&client_secret=${process.env.AMADEUS_API_SECRET}`,
  })
  return token
}

export const handleGetActivities = async (token: string) => {
  const url =
    'https://test.api.amadeus.com/v1/shopping/activities?latitude=30.2672&longitude=-97.7431&radius=10'

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}
