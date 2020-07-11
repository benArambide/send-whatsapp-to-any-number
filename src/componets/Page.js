import React from 'react'
import MessageSender from './MessageSender'
import HowItWorks from './HowItWorks'
import WpImg from '../whatsapp-link-logo--full.svg'
import MobileWp from '../vm-thumb-android-4.png'

const Page = () => {
  return (
    <div className="flex flex-wrap min-h-screen main-bg pt-8 md:pt-0">
      <div className="w-full md:w-1/2 flex justify-center items-center container md:container-xl">
        <div className="w-5/6 md:w-2/3">
          <h1 className="text-4xl leading-none mb-10 font-semibold main-title">Envía mensajes por Whatsapp sin necesidad de agregar el número como contacto</h1>
          <img src={WpImg} alt="" className="w-2/3 mb-4 text-center" />
          <MessageSender className="mb-8 mt-6" />
          <HowItWorks />
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <p className="text-xs mt-4 mb-4">Written by <a href="https://github.com/josueaqp92" className="text-blue-600" target="_blank">Josue Arambide</a></p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={MobileWp} alt="" className={`mx-auto w-1/2`} />
      </div>
    </div>
  )
};

export default Page;
