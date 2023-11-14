import Gallary from "./Gallery";
import NavMenu from "./NavMenu";
import Search from "./Search";

export default function Container(){
    return (
        <div className="p-6 space-y-10 m-3 shadow-2xl rounded-3xl md:p-40 bg-white " >
            <NavMenu/>
            <Search/>
            <Gallary/>

        </div>
    )

}