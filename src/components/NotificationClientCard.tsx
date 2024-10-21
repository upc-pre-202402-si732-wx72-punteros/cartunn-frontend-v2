import Image from "next/image";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";

import information from "@/assets/images/information.png";
import deleteIcon from "@/assets/icons/trash.png";

import deleteNotificationById from "@/logic/deleteNotificationById";
import Notification from "@/interfaces/Notification";

const NotificationClientCard = (props: Notification) => {
    const { t } = useTranslation("global");

    const notificationHandler = (id: number) => {
        toast.promise(
            deleteNotificationById(id), {
                loading: t("notifications.notifications.deleting-notification"),
                success: t("notifications.notifications.deleted-notification"),
                error: t("notifications.notifications.notification-error"),
            }
        );
    };

    return (
        <section className="flex flex-col w-[24%] mt-4 px-6 py-4 border rounded-xl">
            <Toaster />
            <section className="flex justify-between my-2">
                <section className="flex">
                    <Image
                        src={information}
                        alt="information"
                        width={25}
                        height={25}
                    />
                    <h2 className="ml-2 text-xl font-extrabold tracking-tighter">
                        {t("notifications.title-card")}
                    </h2>
                </section>
                <section className="flex">
                    <span className="ml-2 text-xl font-extrabold tracking-tighter">
                        {`${t("notifications.id-product")}: #${props.id}`}
                    </span>
                    <Image
                        src={deleteIcon}
                        alt="delete"
                        width={25}
                        className="ml-2"
                        onClick={() => {notificationHandler(props.id)}}
                    />
                </section>
            </section>
            <span className="my-2 italic text-sm">{props.description}</span>
            <section className="flex justify-between">
                <span>{t("notifications.type-notification")}:</span>
                <span className="font-bold tracking-tighter">{props.type}</span>
            </section>
        </section>
    );
}

export default NotificationClientCard;