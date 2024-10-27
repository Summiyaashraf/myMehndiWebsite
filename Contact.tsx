import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';


const Contact = () => {
    return (
      <div id='contact' className='pt-32 container  bg-red-300'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='space-y-8'>
              <h2 className='text-black text-5xl' data-aos="zoom-in-up">Get in touch</h2>
              <p className='text-amber-50 text-[18px] pt-2' data-aos="zoom-in-up">
                  Drop me a line, give me a call, or send me a message by submitting the foam.
              </p> 
              <div className='text-lime-950 flex gap-3 items-center' data-aos="zoom-in-up">
                  <AiOutlineMail size={30} /> summiyaashraf689@gmail.com
              </div>
              <div className='text-lime-950 flex gap-3 items-center' data-aos="zoom-in-up">
                  <BsTelephone size={30} /> +92 3162573083
              </div>
          </div>
          <div className='space-y-8'>
              <div className='text-black flex flex-col gap-1'>
                  <label htmlFor='name' data-aos="zoom-in-up">Name</label>
                  <input type="text"
                  className='h-[40px] bg-transparent border border-black-50'
                  id='name' />
              </div>
              <div className='text-black flex flex-col gap-1'>
                  <label htmlFor='email' data-aos="zoom-in-up">Email</label>
                  <input type="text"
                  className='h-[40px] bg-transparent border border-black-50'
                  id='email' />
              </div>
              <div className='text-black flex flex-col gap-1'>
                  <label htmlFor='msg' data-aos="zoom-in-up">Message</label>
                  <textarea
                  className='bg-transparent border border-black-50'
                  id='msg' rows={8}>
                  </textarea>
              </div>
              <button className= 'bg-red-700 p-2 px-6' data-aos="zoom-in-up">Send</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact
  