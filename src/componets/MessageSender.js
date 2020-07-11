import React, { useState } from 'react'
import PhoneInput from './PhoneInput'
import { Button } from 'antd'
import isMobile from 'is-mobile'

const MessageSender = ({ className }) => {
  const [link, setLink] = useState('')

  const onChangePhone = phone => {
    const apiLink = isMobile() ? `whatsapp://send?phone=${phone}` :`https://api.whatsapp.com/send?phone=${phone}`;
    setLink(apiLink);
  };

  const generateLink = () => {
    window.location.replace(link);
  };

  return (
    <div className={`${className}`}>
      <div className="mb-4">
        <PhoneInput phoneChanged={onChangePhone} />
      </div>
      <Button type="primary" className={`w-full main-button`} size="large" onClick={generateLink}>Escribir un Mensaje</Button>
    </div>
  )
};

export default MessageSender;
