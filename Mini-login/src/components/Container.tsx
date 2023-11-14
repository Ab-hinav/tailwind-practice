
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"

import { Separator } from "@/components/ui/separator"
import { ChevronRight } from "lucide-react"

import img1 from '../assets/images/image.jpg';
import faceBook from '../assets/images/facebook.png'
import googl from '../assets/images/google.png'
import {Button} from "@/components/ui/button.tsx";

export default function Container(){
    return <div className="flex items-center justify-center min-h-screen bg-rose-50" >

        <Card className=" m-10  shadow-2xl " >
            <div className="flex ">
                <div className=" p-8 h-full w-full md:w-1/2 md:h-1/2 md:p-14" >
                <CardHeader>
                    <CardTitle className="text-4xl font-extrabold mb-4">Login </CardTitle>
                    <CardDescription className="mt-2" >Login to your account to upload download images</CardDescription>
                </CardHeader>

                <CardContent className="mt-8" >
                    {/*<Label htmlFor="email" className="block mb-14"  >Your Email</Label>*/}
                    <Input id="email" type="email" placeholder="Enter your Email" className=" pt-8 pb-8" ></Input>
                    <div className="mt-8 flex justify-between items-center md:flex-row flex-col space-y-2 " >
                        <a className="cursor-pointer  text-xs md:text-sm" >Forgot Password?</a>
                        <Button className="p-4 md:p-8 flex gap-2  w-full md:w-fit shadow-lg">
                            <ChevronRight className="h-4 w-4" />
                            Next</Button>
                    </div>

                </CardContent>
                <Separator></Separator>
                <CardFooter className="mt-8  flex-col " >
                    <p className="text-sm text-slate-300  ">or Login With</p>
                    <div className="flex mt-8 w-full md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-4 " >
                        <Button className="h-full w-full flex justify-evenly " variant="outline"  > <img src={faceBook} className="w-6 h-6 md:w-12 md:h-12" /> FaceBook</Button>
                        <Button className="h-full w-full flex justify-evenly " variant="outline"  > <img src={googl} className="w-6 h-6 md:w-12 md:h-12" /> Google</Button>
                    </div>

                </CardFooter>
                </div>
                <div className="hidden md:block md:w-1/2 md:h-1/2"><img src={img1} className="w-[50rem] h-[40rem] md:h-[42rem]" /></div>
            </div>
        </Card>

    </div>
}