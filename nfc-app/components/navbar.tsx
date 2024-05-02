import logo from "../styles/Img-icon/iconnavv.png";
import Image from 'next/image';
import Link from 'next/link';
import Text_logo from "../styles/Img-icon/TextNavv.svg";
import Text_logo2 from "../styles/Img-icon/TextNav2.svg";


function Navbar(){
    return (
        <nav className="navbar z-50">
            <div>
                <div className="tranform translate-x-[1px] translate-y-[-15px] nav-img flex">
                    <Link href="/"><Image src={ logo } alt="logo" width={100}/></Link>
                    <div className="translate translate-y-[25px] navt-text mt-1">
                        <Image src={Text_logo} alt="textlogo" width={175}/>
                        <Image src={Text_logo2} alt="textlogo2" width={220}/>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;



