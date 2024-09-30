"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Stack, Radio, RadioGroup } from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

import BackButton from "@/components/BackButton";
import environment from "@/environments/enviroment";

const SignUp = () => {
    const { t } = useTranslation("global");
    const [role, setRole] = useState("1");
    const [user, setUser] = useState({username: "", password: "", role: role});
    const router = useRouter();

    const signUpHandler = async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
                //roles: [user.role]
            }),
        };

        try {
            const response = await fetch(`${environment.serverBasePath}/authentication/sign-up`, requestOptions);

            if (!response.ok) throw new Error("Error registering user");

            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error);
            throw new Error("Network error or server error");
        }
    };

    const handleSubmit = async () => {
        await signUpHandler();
        router.push("/login");
    };

    const notify = () => {
        toast.promise(
            handleSubmit(), {
                loading: "Registrando usuario...",
                success: "Usuario registrado correctamente",
                error: "Error: No se pudo registrar el usuario 😔",
            }
        );
    };

    return (
        <section className="flex items-center w-full sm:w-1/2 xl:w-1/5 h-screen m-auto">
            <Toaster />
            <section className="w-full">
                <BackButton route="/login" />
                <h1 className="mt-8 text-5xl text-center font-extrabold tracking-tighter">
                    {t("sign-up.title")}
                </h1>
                <section className="flex flex-col mx-auto my-4">
                    <input
                        type="text"
                        placeholder={t("sign-up.name-placeholder")}
                        className="c-input__input"
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder={t("sign-up.password-placeholder")}
                        className="c-input__input mt-2"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <RadioGroup onChange={setRole} value={role}>
                        <Stack my={4}>
                            <span>{t("sign-up.sign-up-as")}</span>
                            <section className="flex">
                                <Radio value="1" mr={4}>
                                    {t("sign-up.client")}
                                </Radio>
                                <Radio value="2">
                                    {t("sign-up.staff")}
                                </Radio>
                            </section>
                        </Stack>
                    </RadioGroup>
                    <button className="c-button py-4 font-semibold" onClick={notify}>
                        {t("sign-up.button")}
                    </button>
                </section>
                <span className="flex justify-center">
                    {t("login.do-you-already-have-an-account")}
                    <Link href="/login">
                        <u>{t("sign-up.login")}</u>
                    </Link>
                </span>
            </section>
        </section>
    );
};

export default SignUp;