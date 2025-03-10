import { fadeIn } from "../variants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="my-20 py-5 bg-[#1a324c] text-[#f7fafc]">
       <svg className='relative top-[-25px]'
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#0d1926" fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
         </svg>
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x divide-gray-500">
		<motion.div
     variants={fadeIn("up", 0.2)}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
     className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>philippines</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>09074015773</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>stamariaecho@gmail.com</span>
				</p>
			</div>
		</motion.div>
		<motion.form 
     variants={fadeIn("up", 0.2)}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
    noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Your full name" className="text-sm px-2 py-1 block w-full rounded-md shadow-sm border border-gray-500" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="Your email" className="text-sm px-2 py-1 block w-full rounded-md shadow-sm border border-gray-500" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="text-sm px-2 py-1 block w-full rounded-md border border-gray-500"></textarea>
			</label>
			<button type="button" className="w-[50%] mx-auto px-4 py-1 uppercase text-[15px] tracking-widest duration-500
     rounded-full border border-gray-500 hover:border-[#8cb0d9] cursor-pointer hover:bg-[#8cb0d9] hover:text-black">Submit</button>
		</motion.form>
	</div>
    <svg className="relative bottom-[-25px]"
       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
       <path fill="#0d1926" fill-opacity="1" d="M1440,136L1360,141.3C1280,147,1120,157,960,146.7C800,136,640,104,480,98.7C320,93,160,115,80,125.3L0,136L0,200L1440,200Z"></path>
    </svg>
</div>
  )
}

export default Contact
