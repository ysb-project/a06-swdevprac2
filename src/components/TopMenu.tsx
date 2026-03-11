import styles from '@/components/topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';

export default function TopMenu(){
    return (
        <div className="
            h-[50px] bg-white fixed 
            top-0 left-0 right-0 z-40 
            border border-gray-200
            flex flex-row-reverse justify-start
        ">
            <Image src={'/img/logo.png'} 
                alt='logo'
                className="h-full w-auto relative"
                width={0} height={0}
                sizes='100vh'
            />
            <TopMenuItem title='Booking' pageRef='booking'/>
        </div>
    );
}