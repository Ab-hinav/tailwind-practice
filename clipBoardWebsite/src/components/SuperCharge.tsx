import img1 from '../assets/images/icon-blacklist.svg';
import img2 from '../assets/images/icon-text.svg';
import img3 from '../assets/images/icon-preview.svg';

export default function SuperCharge() {
    return <section>
        <div className="section-container my-20" >
            <h3>Supercharge your Workflow</h3>
            <p className=" section-content mb-16" >
                We've got the tools to boost your productivity
            </p>
            <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
                <div className="flex flex-col items-center space-y-5" >
                    <img src={img1} alt="" className="mb-6" ></img>
                    <h5>
                        Create BlackList
                    </h5>
                    <p className='max-w-md text-grayishBlue' >
                        Easily search your snippets by content, category, web address, application, and more.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-5" >
                    <img src={img2} alt="" className="mb-6" ></img>
                    <h5>
                        Plain Text snippets
                    </h5>
                    <p className='max-w-md text-grayishBlue' >
                        Remove unwanted formatting from snippets, so you can create a readable snippet with each tag.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-5" >
                    <img src={img3} alt="" className="mb-6" ></img>
                    <h5>
                        Sneak Preview
                    </h5>
                    <p className='max-w-md text-grayishBlue' >
                        Quick preview of any code before you submit it. Don't worry, your snippets will be safe and private.! 🔒 🔒 🔒 🔒 🔒 🔒 🔒 🔒 
                    </p>
                </div>

            </div>
        </div>
    </section>
}