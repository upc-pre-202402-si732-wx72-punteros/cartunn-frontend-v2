"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Stack, Radio, RadioGroup } from "@chakra-ui/react";

import BackButton from "@/components/BackButton";

const Login = () => {
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
        <section className="flex items-center w-1/4 h-screen m-auto px-16">
            <section className="w-full">
                <BackButton route="/login" />
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">{t("sign-up.title")}</h1>
                <section className="flex flex-col mx-auto my-4">
                    <input type="text" placeholder={t("sign-up.name-placeholder")}className="c-input__input" />
                    <input type="password" placeholder={t("sign-up.password-placeholder")}className="c-input__input mt-2" />
                    <RadioGroup
                        onChange={setValue}
                        value={value}
                    >
                        <Stack my={4}>
                            <span>{t("sign-up.sign-up-as")}</span>
                            <section className="flex">
                                <Radio value="staff" mr={4}>{t("sign-up.staff")}</Radio>
                                <Radio value="client">{t("sign-up.client")}</Radio>
                            </section>
                        </Stack>
                    </RadioGroup>
                    <button
                        className="c-button py-4 font-semibold"
                        onClick={setRouterHandler}
                    >
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
}

export default Login;