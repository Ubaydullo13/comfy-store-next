import Image from "next/image";
import card1 from '../assets/card1.webp'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'

function FeaturedProducts() {
  return (
    <>
    <div className="border-b border-base-300 px-48 pb-5 mt-20">
      <h2 className="text-3xl font-medium tracking-wider">Featured Products</h2>
    </div>
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-48 mb-10'>
    <a href="/products/19" className="w-full shadow-xl rounded-lg hover:shadow-2xl transition duration-300">
         <figure className="px-4 pt-4">
        <Image 
        src={card1}
        className="rounded-xl h-[192px] object-cover"/>
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider">avant-garde lamp</h2>
            <span className="text-secondary">$179.99</span>
         </div>
    </a>

    <a href="/products/6" className="w-full shadow-xl rounded-lg hover:shadow-2xl transition duration-300">
         <figure className="px-4 pt-4">
        <Image 
        src={card2}
        className="rounded-xl h-[192px] object-cover"/>
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider"> coffee table</h2>
            <span className="text-secondary">$179.99</span>
         </div>
    </a>

    <a href="/products/7" className="w-full shadow-xl rounded-lg hover:shadow-2xl transition duration-300">
         <figure className="px-4 pt-4">
        <Image 
        src={card3}
        className="rounded-xl h-[192px] object-cover"/>
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider">comfy bed</h2>
            <span className="text-secondary">$129.99</span>
         </div>
    </a>
        
    </div>
    </>
    
  )
}

export default FeaturedProducts