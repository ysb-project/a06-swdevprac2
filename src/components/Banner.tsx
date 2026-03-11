import Image from "next/image";
import styles from "@/components/banner.module.css"

export default function Banner(){
    return (
        <div>
            <div className="block m-0 p-[5px] w-screen h-[80vh] relative">
                <Image src={'/img/cover.jpg'} 
                    alt='cover' 
                    fill={true}
                    priority
                    objectFit='cover'  
                />
                <div className="text-white top-1/2 flex flex-col  -translate-y-1/2 z-20 relative 
                    text-center p-[30px] leading-[30px] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)] font-mono
                ">
                    <h1 className="pb-[30px] scale-200 font-bold">where every event finds its venue</h1>
                    <h3>Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we're connecting people to the perfect place.</h3>
                </div>
            </div>
            
        </div>
    );
}