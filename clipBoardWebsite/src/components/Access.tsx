import img from '../assets/images/image-devices.png'

export default function Access(){
    return <section>
        <div className="section-container my-20 px-10" >
            <h3>Access Clipboard AnyWhere</h3>
            <p className="section-content mb-24" >
                Clipboard Instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices.
            </p>
            <img src={img} alt="" className="mx-auto"/>
        </div>
    </section>
}