
import img from '../assets/images/image-computer.png'

export default function Features(){

    return <section>
        <div className="section-container my-20 px-10" >
            <div className="relative flex flex-col md:flex-row md:space-x-32" >
                <div className="md:w-1/2" >
                    <img src={img} className='md:absolute top-[10%] right-[50%]' ></img>
                </div>

                <div className='flex-col flex mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16' >
                    <div>
                        <h5  > Quick Search</h5>
                        <p className='text-grayishBlue max-w-md'>
                            Easily search your snippets by content, category, web address, application, and more.
                        </p>
                    </div>
                    <div>
                        <h5 > Complete History</h5>
                        <p className='text-grayishBlue max-w-md'>
                            Retreive any snippets from the first moment you started using the app.
                        </p>
                    </div>
                    <div>
                        <h5 > iCloud Sync</h5>
                        <p className='text-grayishBlue max-w-md'>
                           Instantly saves and syncs snippets across all devices
                        </p>
                    </div>
                </div>


            </div>
        </div>
    </section>

}