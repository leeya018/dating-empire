import nc from "next-connect"
import { corsMiddleware } from "./validate"
import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

const handler = nc({ attachParams: true })
handler.use(corsMiddleware)

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    message = 1,
    amount = 10,
    is_tinder_u = true,
    pageToken = null,
  } = req.body
  const withToken = pageToken ? `&page_token=${pageToken}` : ""
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    // url: `https://api.gotinder.com/v2/matches?locale=en&count=${amount}&is_tinder_u=${is_tinder_u}&message=${message}`,
    url: `https://api.gotinder.com/v2/matches?locale=en&count=${amount}&is_tinder_u=${is_tinder_u}&message=${message}${withToken}`,
    headers: {
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
      "x-auth-token": process.env.NEXT_PUBLIC_X_AUTH_TOKEN,
    },
  }
  axios(config)
    .then(function (response) {
      res.status(200).json(response.data)
    })
    .catch(function (error) {
      console.log(error)
      res.status(error.status).json(error)
    })
})

export default handler
