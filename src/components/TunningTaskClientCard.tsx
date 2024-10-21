import Image from "next/image";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";

import deleteIcon from "@/assets/icons/trash.png";
import TunningTask from "@/interfaces/TunningTask";
import deleteTunningTaskById from "@/logic/deleteTunningTaskById";

const TunningTaskClientCard = (props: TunningTask) => {
    const { t } = useTranslation("global");
    const tunningTaskHandler = (id: number) => {
        toast.promise(
            deleteTunningTaskById(id), {
                loading: t("reports.notifications.deleting-report"),
                success: t("reports.notifications.deleted-report"),
                error: t("reports.notifications.report-error"),
            }
        );
    };

    return (
        <section className="flex flex-col w-[24%] mt-4 px-6 py-4 border rounded-xl">
            <Toaster />
            <section className="flex justify-between">
                <span className="text-xl font-extrabold tracking-tighter">{`${t("reports.title-card")}: #${props.id}`}</span>
                <Image
                    src={deleteIcon}
                    alt="delete"
                    width={24}
                    onClick={() => tunningTaskHandler(props.id)}
                />
            </section>
            <span className="my-2 italic">{props.modifiedPart}</span>
            <section className="flex justify-between">
                <span className="font-semibold text-slate-400 tracking-tighter">{`${t("reports.date")}:`}</span>
                <span>{props.date}</span>
            </section>
            <section className="flex justify-between">
                <span className="font-semibold text-slate-400 tracking-tighter">{`${t("reports.status")}:`}</span>
                <span>{props.status}</span>
            </section>
        </section>
    );
}

export default TunningTaskClientCard;