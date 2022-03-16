// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from'nodemailer'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body)
  const {name, email, phone} = req.body

  console.log(process.env.MAIL)
  try{
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASS
      }
    })
    const mailOptions = {
      from: process.env.MAIL,
      to: process.env.MAIL,
      subject: 'sending user data',
      text: `name: ${name} email: ${email} phone: ${phone}`
    }
    await transporter.sendMail(mailOptions)
  } catch(err){
    res.status(400).json({ message: 'Something went wrong! Try again another time' })
  }
  res.status(200).json({ message: 'Your data send successfully!' })
}
