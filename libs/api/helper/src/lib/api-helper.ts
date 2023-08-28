import { APIResponseType } from '@hostelzo-mono-repo/api-interfaces';
import nodemailer from 'nodemailer';
/**
 * Function for returning Error response
 * @param message
 * @param data
 * @param response
 */
export function returnErrorResponse(message, data, response): string {
  const responseData = {} as APIResponseType;
  responseData.message = message;
  responseData.data = data;
  return response.status(500).json(responseData);
}

/**
 * Function for returning Success response
 * @param message
 * @param data
 * @param response
 */
export function returnSuccessResponse(message, data, response): string {
  const responseData = {} as APIResponseType;
  responseData.message = message;
  responseData.data = data;
  return response.json(responseData);
}

export const sendMail = (mailOptions) => {
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'c5dd940cfab0a4',
      pass: '88973f4e22c134',
    },
  });
  mailOptions.from = process.env.FROM_EMAIL;
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
