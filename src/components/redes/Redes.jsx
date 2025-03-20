import React from 'react'
import { Card } from '../card/Card'
import { Portal } from '../portal/Portal'
import styles from '../../app/page.module.css'
import Image from 'next/image'

const Redes = () => {
  return (
    <div className=" w-full h-full pt-16 mt-16 relative" id="redes">
      <div className={`${styles.contenedor} grid grid-cols-3 justify-around`}>
        <div className={` col-span-2 flex flex-col px-20 justify-center`}>
          <h2 className='text-xl text-blue-800'>Redes informáticas</h2>
          <p className='text-3xl text-slate-900 font-semibold mb-4'>¿Son las Redes el tejido invisible que conecta nuestro mundo?</p>
          <p className='text-gray-900 '>En la era digital, las redes informáticas son mucho más que cables y routers. Son el lenguaje secreto que permite la comunicación instantánea y el intercambio de información a escala global. ¿Te atreves a descifrarlo? Si la respuesta es “sí”, aquí podrás conocer:</p>
          <ul className='text-gray-900 mt-4  list-disc list-inside list-(var())'>
            <li>Elementos</li>
            <li>Medios de comunicación</li>
            <li>Transmision de datos</li>
            <li>Medios de transmision de datos</li>
          </ul>
        </div>
        <div className='absolute right-0'>
          <Image 
            src={'/internet.jpg'}
            height={480}
            width={550}
            alt='Image abaout internet'
            className='rounded-2xl rounded-r-none shadow-md'
          />
          {/* <Card
          image={'/internet.jpg'} 
          texto={'Redes'} 
          // content={'Las redes son conexiones invisibles que unen personas, ideas y recursos en un mundo digital. Desde redes sociales hasta sistemas de comunicación, cada enlace ofrece oportunidades para colaborar y crecer. En un entorno donde la conexión es esencial, las redes son el puente hacia un futuro lleno de posibilidades.'}
          /> */}
        </div>
      </div>

  </div>
  )
}

export default Redes