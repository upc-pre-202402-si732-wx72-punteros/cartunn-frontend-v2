"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";

import postProduct from "@/logic/postProduct";

const UploadItemPage = () => {
    const { t } = useTranslation("global");
    const [item, setItem] = useState({title: "", description: "", image: "", price: 0});

    const notify = () => {
        toast.promise(
            postProduct(item.title, item.description, item.image, item.price), {
                loading: t("upload-item.notifications.post-item"),
                success: t("upload-item.notifications.sent-item"),
                error: t("upload-item.notifications.upload-error"),
            }
        );
    };

    return (
        <article className="flex items-center w-full sm:w-1/2 xl:w-1/5 my-40 m-auto">
            <Toaster />
            <section className="w-full">
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">
                    {t("upload-item.title")}
                </h1>
                <section className="flex flex-col mx-auto my-4">
                    <input
                        type="text"
                        placeholder={t("upload-item.title-placeholder")}
                        className="c-input__input"
                        onChange={(e) => setItem({...item, title: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder={t("upload-item.description-placeholder")}
                        className="c-input__input mt-2"
                        onChange={(e) => setItem({...item, description: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder={t("upload-item.image-placeholder")}
                        className="c-input__input mt-2"
                        onChange={(e) => setItem({...item, image: e.target.value})}
                    />
                    <input
                        type="number"
                        placeholder={t("upload-item.price-placeholder")}
                        className="c-input__input mt-2"
                        onChange={(e) => setItem({...item, price: parseInt(e.target.value)})}
                    />
                    <button
                        className="c-button my-2 py-4 font-semibold"
                        onClick={notify}
                    >
                        {t("upload-item.button")}
                    </button>
                </section>
            </section>
        </article>
    );
}

export default UploadItemPage;