"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

import BackButton from "@/components/BackButton";
import environment from "@/environments/enviroment";

const ResetPassword = () => {
    const { t } = useTranslation("global");
    const [user, setUser] = useState({username: "", password: ""});
    const router = useRouter();

    /*
    const token = localStorage.getItem("token");

    const signUpHandler = async () => {
        const userRequestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            }),
        };

        try {
            const userResponse = await fetch(`${environment.serverBasePath}/authentication/sign-up/1`, userRequestOptions);

            if (!userResponse.ok) throw new Error("Error registering user");

            const result = await userResponse.json();
            return result;
        } catch (error) {
            console.error(error);
            throw new Error("Network error or server error");
        }
    };*/

    const setRouterHandler = async () => {
        // await signUpHandler();
        router.push("/login");
    };

    const notify = () => {
        toast.promise(
            setRouterHandler(), {
                loading: t("reset-password.notifications.success"),
                success: t("reset-password.notifications.in-process"),
                error: t("reset-password.notifications.error"),
            }
        );
    };

    return (
        <section className="flex items-center w-full sm:w-1/2 xl:w-1/5 h-screen m-auto">
            <Toaster />
            <section className="w-full">
                <BackButton route="/login" />
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">{t("reset-password.title")}</h1>
                <section className="flex flex-col mx-auto my-4">
                    <input
                        type="text"
                        placeholder={t("reset-password.name-placeholder")}
                        className="c-input__input"
                        onChange={(e) => { setUser({...user, username: e.target.value}) }}
                    />
                    <input
                        type="password"
                        placeholder={t("reset-password.password-placeholder")}
                        className="c-input__input mt-2"
                        onChange={(e) => { setUser({...user, password: e.target.value}) }}
                    />
                    <button
                        className="c-button my-2 py-4 font-semibold"
                        onClick={notify}
                    >
                        {t("reset-password.button")}
                    </button>
                </section>
            </section>
        </section>
    );
};

export default ResetPassword;