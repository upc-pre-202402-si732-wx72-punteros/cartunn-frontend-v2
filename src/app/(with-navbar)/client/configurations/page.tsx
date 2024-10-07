"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Stack, Radio, RadioGroup } from "@chakra-ui/react";

const ConfigurationsPage = () => {
    const { t } = useTranslation("global");
    const [value, setValue] = useState("staff");
    const [username, setUsername] = useState("");

    return (
        <article className="flex items-center w-1/4 mx-auto my-52 px-16">
            <section className="w-full">
                <span className="mt-8 text-4xl text-center font-extrabold tracking-tighter">
                    {t("configurations.title")}
                </span>
                <section className="flex flex-col mx-auto my-4">
                    <input
                        type="text"
                        placeholder={t("configurations.username-placeholder")}
                        className="c-input__input"
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                    <input
                        type="password"
                        placeholder={t("configurations.password-placeholder")}
                        className="c-input__input mt-2"
                    />
                    <RadioGroup
                        onChange={setValue}
                        value={value}
                    >
                        <Stack my={4}>
                            <span>{`${t("configurations.change-type")}:`}</span>
                            <section className="flex">
                                <Radio value="staff" mr={4}>{t("configurations.staff")}</Radio>
                                <Radio value="client">{t("configurations.client")}</Radio>
                            </section>
                        </Stack>
                    </RadioGroup>
                    <button
                        className="c-button py-4 font-semibold"
                        onClick={() => {
                            window.location.href = "/"
                        }}
                    >
                        {t("configurations.button")}
                    </button>
                </section>
            </section>
        </article>
    );
}

export default ConfigurationsPage;