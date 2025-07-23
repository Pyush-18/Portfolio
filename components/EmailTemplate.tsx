import React from 'react'
interface EmailTemplateProps{
  name: string;
  email: string;
  message: string;
}
function EmailTemplate({name, email, message}: EmailTemplateProps) {
  return (
    <div className="font-sans text-black p-6 bg-white rounded-md">
      <p className="text-base mb-2">
        You’ve received a new message from your portfolio contact form:
      </p>

      <div className="my-4 border border-gray-300 rounded-md p-4 bg-gray-50">
        <p className="mb-2"><span className="font-semibold">Name:</span> {name}</p>
        <p className="mb-2"><span className="font-semibold">Email:</span> {email}</p>
        <p className="mb-2 font-semibold">Message:</p>
        <p className="whitespace-pre-line">{message}</p>
      </div>
    </div>
  )
}

export default EmailTemplate