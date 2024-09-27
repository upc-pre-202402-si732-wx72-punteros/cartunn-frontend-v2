"use client"
import { useState } from "react";
import Link from "next/link";
import { Stack, Radio, RadioGroup } from "@chakra-ui/react";

import BackButton from "@/components/BackButton";

const Login = () => {
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
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">CREAR CUENTA</h1>
                <section className="flex flex-col mx-auto my-4">
                    <input type="text" placeholder="Ingresar nombre de usuario" className="c-input__input" />
                    <input type="password" placeholder="Ingresar contraseña" className="c-input__input mt-2" />
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
                        Crear cuenta
                    </button>
                </section>
                <span>¿Ya tienes cuenta? <Link href="/login"><u>Iniciar sesión</u></Link> </span>
            </section>
        </section>
    );
}

export default Login;