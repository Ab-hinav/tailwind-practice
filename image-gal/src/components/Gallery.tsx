import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import bookmark from '../assets/bookmark.svg';

export default function Gallary(){
    

    return <div className="grid gap-4 md:grid-cols-3 " >

        <div className="relative group">
            <img src={image1} alt=""  className='w-72' />
            <div className="absolute  bg-black bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className='flex justify-between w-full' >
                    <div className="font-normal">
                        <p className="text-sm">Abstract Painting</p>
                        <p className="text-xs">245 likes - 35 shares</p>
                    </div>
                    <div className="flex items-center"><img src={bookmark} alt="" /></div>
                </div>
            </div>
        </div>

        <div className="relative group">
            <img src={image2} alt=""  className='w-72' />
            <div className="absolute  bg-black bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className='flex justify-between w-full' >
                    <div className="font-normal">
                        <p className="text-sm">Abstract Painting</p>
                        <p className="text-xs">245 likes - 35 shares</p>
                    </div>
                    <div className="flex items-center"><img src={bookmark} alt="" /></div>
                </div>
            </div>
        </div>

        <div className="relative group">
            <img src={image3} alt=""  className='w-72' />
            <div className="absolute  bg-black bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className='flex justify-between w-full' >
                    <div className="font-normal">
                        <p className="text-sm">Abstract Painting</p>
                        <p className="text-xs">245 likes - 35 shares</p>
                    </div>
                    <div className="flex items-center"><img src={bookmark} alt="" /></div>
                </div>
            </div>
        </div>

        <div className="relative group">
            <img src={image4} alt=""  className='w-72' />
            <div className="absolute  bg-black bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className='flex justify-between w-full' >
                    <div className="font-normal">
                        <p className="text-sm">Abstract Painting</p>
                        <p className="text-xs">245 likes - 35 shares</p>
                    </div>
                    <div className="flex items-center"><img src={bookmark} alt="" /></div>
                </div>
            </div>
        </div>

        <div className="relative group">
            <img src={image5} alt=""  className='w-72' />
            <div className="absolute  bg-black bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className='flex justify-between w-full' >
                    <div className="font-normal">
                        <p className="text-sm">Abstract Painting</p>
                        <p className="text-xs">245 likes - 35 shares</p>
                    </div>
                    <div className="flex items-center"><img src={bookmark} alt="" /></div>
                </div>
            </div>
        </div>

        <div className="relative group">
            <img src={image6} alt=""  className='w-72' />
            <div className="absolute  bg-black bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 opacity-0 group-hover:opacity-100 bg-opacity-40">
                <div className='flex justify-between w-full' >
                    <div className="font-normal">
                        <p className="text-sm">Abstract Painting</p>
                        <p className="text-xs">245 likes - 35 shares</p>
                    </div>
                    <div className="flex items-center"><img src={bookmark} alt="" /></div>
                </div>
            </div>
        </div>

        


    </div>

}