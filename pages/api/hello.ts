// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

/**
 * API handler for the /api/hello route.
 * Returns a JSON response with a sample name.
 *
 * @param {NextApiRequest} req - The API request object.
 * @param {NextApiResponse<Data>} res - The API response object.
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
