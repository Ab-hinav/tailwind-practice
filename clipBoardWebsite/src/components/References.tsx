import img1 from '../assets/images/logo-google.png'
import img2 from '../assets/images/logo-hp.png'
import img3 from '../assets/images/logo-ibm.png'
import img4 from '../assets/images/logo-microsoft.png'


export default function References(){

    return <section>
        <div className=" flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0" >
            <img src={img1} ></img>
            <img src={img2} ></img>
            <img src={img3} ></img>
            <img src={img4} ></img>
        </div>
    </section>

}