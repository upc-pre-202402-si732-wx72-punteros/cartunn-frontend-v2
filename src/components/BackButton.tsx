import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import arrowLeftIcon from "@/assets/icons/arrow-left-2.png";

type BackButtonProps = {
    route: string;
}

const BackButton = (props: BackButtonProps) => {
    const { t } = useTranslation("global");

    return (
        <Link href={props.route} className="flex">
            <Image src={arrowLeftIcon} alt="arrow icon" className="mr-2" />
            <span>{t("back-button")}</span>
        </Link>
    );
};

export default BackButton;