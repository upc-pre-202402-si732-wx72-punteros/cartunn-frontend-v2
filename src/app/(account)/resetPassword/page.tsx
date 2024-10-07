"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";

import BackButton from "@/components/BackButton";

const ResetPassword = () => {
    const { t } = useTranslation("global");
    const [value, setValue] = useState("staff");
    const [username, setUsername] = useState("");

    const setRouterHandler = () => {
        if (value) {
            if (value === "staff") window.location.href = `/${value}/${username}/home`;
            else if (value === "client") window.location.href = `/${value}/${username}/home`;
        }
    };

    return (
        <section className="flex items-center w-full sm:w-1/2 xl:w-1/5 h-screen m-auto">
            <section className="w-full">
                <BackButton route="/login" />
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">{t("reset-password.title")}</h1>
                <section className="flex flex-col mx-auto my-4">
                    <input
                        type="text"
                        placeholder={t("reset-password.name-placeholder")}
                        className="c-input__input"
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                    <input
                        type="password"
                        placeholder={t("reset-password.password-placeholder")}
                        className="c-input__input mt-2"
                    />
                    <button
                        className="c-button my-2 py-4 font-semibold"
                        onClick={setRouterHandler}
                    >
                        {t("reset-password.button")}
                    </button>
                </section>
            </section>
        </section>
    );
};

export default ResetPassword;