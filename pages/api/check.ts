import { Grammarly } from '@stewartmcgown/grammarly-api'

import { NextApiRequest, NextApiResponse } from 'next'

const grammarly = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  const { text } = request.query

  if (text) {
    const free = new Grammarly()
    const result = await free.analyse(text as string)
    return response.status(200).json(result)
  }

  return response.status(404).json({ error: { message: 'Missing text' } })
}

export default grammarly
