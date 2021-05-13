import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  delay(5000)

  res.status(200).json({ date: new Date().toUTCString() })
}
