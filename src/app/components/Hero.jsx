import Image from 'next/image'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4];

function Hero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-48 mt-20'>
        <div>
            <h1 className='text-6xl max-w-2xl font-bold tracking-tight'>
                We are changing the way people shop.
            </h1>
            <p className='max-w-xl mt-8 text-lg leading-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          accusantium ratione officiis labore qui! Est sequi nostrum, laboriosam
          veniam similique odio, nihil labore corrupti illum minima, alias omnis
          sit a!
            </p>
            <div className='mt-10'>
                <a href="#" className='btn btn-primary uppercase'>
                    Our Products
                </a>
            </div>
        </div>
        <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
            {carouselImages.map((image, index) => (
                <div key={index} className='carousel-item'>
                    <Image
                        src={image}
                        alt='hero image'
                        width={320}
                        className='rounded-box'
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hero