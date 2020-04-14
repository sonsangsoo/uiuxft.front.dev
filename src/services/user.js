import HTTP from '../utils/http'

export const getUser = (params) =>
  HTTP.post('api/smartcntrt/cust/nameVerifyCheck', params)

// SelectDisNetwork
