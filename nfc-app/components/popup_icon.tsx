import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";

function PopupIcon () {

    return (
        <div>
            <Link href={"/Feedback"}>
                <div className="icon-popup">
                    <RiCustomerService2Fill size={40}/>
                </div>
            </Link>
        </div>
    );
}

export default PopupIcon
