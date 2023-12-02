import img1 from '../assets/images/logo.svg'
import img2 from '../assets/images/icon-facebook.svg'
import img3 from '../assets/images/icon-twitter.svg'
import img4 from '../assets/images/icon-instagram.svg'

export default function Footer(){

    return <div className="grid grid-cols-1 py-8 bg-slate-100  gap-2 md:grid-cols-5 " >

        <div className="flex justify-center" ><img src={img1} className="w-[40px] h-[40px]"  alt="clipboard" 
         ></img></div>

         <div className='flex flex-col items-center justify-center gap-2'>
            <a href="">FAQ</a>
            <a>Contacts</a>
         </div>
         <div className='flex flex-col items-center justify-center gap-2'>
            <a href="">Privacy Policy</a>
            <a>Press Kit</a>
         </div>

         <div className='flex flex-col items-center justify-center gap-2'>
            <a href="">Install Guide</a>
         </div>

         <div className='flex  items-center justify-center gap-2 md:gap-4 '>
            <a href=""><img src={img2} alt="" /></a>
            <a href=""><img src={img3} alt="" /></a>
            <a href=""><img src={img4} alt="" /></a>
         </div>


    </div>


}