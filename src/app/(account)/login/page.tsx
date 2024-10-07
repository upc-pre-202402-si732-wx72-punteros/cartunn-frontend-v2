"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

import environment from "@/environments/enviroment";

const Login = () => {
    const { t } = useTranslation("global");
    const [user, setUser] = useState({username: "", password: ""});
    const router = useRouter();

    useEffect(() => {
        setUser({
            username: user.username,
            password: user.password,
        });
    }, [user.username, user.password]);

    const signInHandler = async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            }),
        };

        const response = await fetch(`${environment.serverBasePath}/authentication/sign-in`, requestOptions);
        if (!response.ok) {
            throw new Error("Login failed");
        }

        const result = await response.json();
        localStorage.setItem("token", result.token);
        return result;
    };

    //if (localStorage.getItem("token")) {
    //    const fetchData = async () => {
    //        const data = await fetch(`${environment.serverBasePath}/users`);
    //        if (data) {
    //            if (data === "ROLE_CLIENT") router.push("/client/home");
    //            else router.push("/staff/home");
    //        }
    //    }
    //}

    const notify = () => {
        toast.promise(signInHandler(), {
            loading: "Iniciando sesión",
            success: "Sesión iniciada correctamente",
            error: "Error: Uuario no registrado 😔",
        });
    };

    return (
        <section className="flex items-center w-full sm:w-1/2 xl:w-1/5 h-screen m-auto">
            <Toaster />
            <section className="w-full">
                <h1 className="mt-8 text-5xl text-center font-extrabold tracking-tighter">
                    {t("login.title")}
                </h1>
                <section className="flex flex-col mx-auto my-4">
                    <input
                        type="text"
                        placeholder={t("login.user-placeholder")}
                        className="c-input__input"
                        onChange={(e) =>
                            setUser({ ...user, username: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        placeholder={t("login.password-placeholder")}
                        className="c-input__input mt-2"
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                    <span className="my-4 text-center">
                        <Link href="/reset-password">
                            <u>{t("login.forgot-password")}</u>
                        </Link>
                    </span>
                    <button
                        className="c-button py-4 font-semibold"
                        onClick={notify}
                    >
                        {t("login.button")}
                    </button>
                </section>
                <span className="flex justify-center">
                    {t("login.do-you-already-have-an-account")}
                    <Link href="/sign-up">
                        <u>{t("login.sign-up")}</u>
                    </Link>
                </span>
            </section>
        </section>
    );
};

export default Login;