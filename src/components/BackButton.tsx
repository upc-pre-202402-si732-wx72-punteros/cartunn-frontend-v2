import Link from "next/link";
import Image from "next/image";
import arrowLeftIcon from "@/assets/icons/arrow-left-2.svg";

type BackButtonProps = {
    route: string;
}

const BackButton = (props: BackButtonProps) => {
    return (
        <Link href={props.route} className="flex">
            <Image src={arrowLeftIcon} alt="arrow icon" className="mr-2" />
            <span>Volver</span>
        </Link>
    );
};

export default BackButton;