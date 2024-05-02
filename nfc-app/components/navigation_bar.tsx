import Image from 'next/image'
import Link from 'next/link'



import Card from "../styles/Img-icon/Home.svg";
import Home from "../styles/Img-icon/Card.svg";
import Service from "../styles/Img-icon/Service.svg";
import PopupIcon from '@/components/popup_icon'

export default function NavigationBar() {
    return (
    <div className='container-navi mt-14 z-50'>
      <nav className="flex justify-between navi-bar">

        <div className="tranfrom translate-x-[20px] icon">
            <Link href={'/'}>
                <Image src={Home} alt="home-navi"/>
                <div className='translate translate-x-[-5px]'>
                    <label htmlFor="icon" className="text-xs icon-navi">หน้าหลัก</label>
                </div>
            </Link>
        </div>

        <div className="icon">
            <Link href={'/BoardGame'}>
                <Image src={Card} alt="home-navi"/>
                <div className='translate translate-x-[5px]'>
                    <label htmlFor="icon-home" className="text-xs icon-navi">เกมส์</label> 
                </div>
            </Link>
        </div>

        <div className="tranfrom translate-x-[-20px] icon">
        <Link href={'/Service'}>
                <Image src={Service} alt="home-navi"/>
                <div className='translate translate-x-[2px]'>
                    <label htmlFor="icon-home" className="text-xs icon-navi">บริการ</label>   
                </div>
            </Link>
        </div>

      </nav>
    </div>
    )
}