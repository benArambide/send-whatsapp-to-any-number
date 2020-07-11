import React from 'react'
import MessageSender from './MessageSender'
import HowItWorks from './HowItWorks'
import WpImg from '../whatsapp-link-logo--full.svg'
import MobileWp from '../vm-thumb-android-4.png'

const Page = () => {
  return (
    <div className="flex flex-wrap min-h-screen main-bg">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-2/3">
          <h1 className="text-4xl leading-none mb-10 font-semibold main-title">Envía mensajes por Whatsapp sin necesidad de agregar el número como contacto</h1>
          <img src={WpImg} alt="" className="w-2/3 mb-4 text-center" />
          <MessageSender className="mb-8 mt-6" />
          <HowItWorks />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={MobileWp} alt="" className={`mx-auto w-1/2`} />
      </div>
    </div>
  )
};

export default Page;
