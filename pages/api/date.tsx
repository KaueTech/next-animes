import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  await delay(5000)

  res.status(200).json({ date: new Date().toUTCString() })
}
