"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Stack, Radio, RadioGroup } from "@chakra-ui/react";

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
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">{t("login.title")}</h1>
                <section className="flex flex-col mx-auto my-4">
                    <input
                        type="text"
                        placeholder="Ingresar usuario"
                        className="c-input__input"
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                    <input
                        type="password"
                        placeholder="Ingresar contraseña"
                        className="c-input__input mt-2"
                    />
                    <RadioGroup
                        onChange={setValue}
                        value={value}
                    >
                        <Stack
                            my={4}
                        >
                            <span>Loguearse como: </span>
                            <section className="flex">
                                <Radio value="staff" mr={4}>Staff mecánico</Radio>
                                <Radio value="client">Cliente</Radio>
                            </section>
                        </Stack>
                    </RadioGroup>
                    <button
                        className="c-button py-4 font-semibold"
                        onClick={setRouterHandler}
                    >
                        Ingresar
                    </button>
                </section>
                <span>¿No tienes cuenta? <Link href="/sign-up"><u>Crear cuenta</u></Link> </span>
            </section>
        </section>
    );
};

export default Login;