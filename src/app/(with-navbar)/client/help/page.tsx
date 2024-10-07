"use client"
import { useTranslation } from "react-i18next";

const HelpPage = () => {
    const { t } = useTranslation("global");

    return (
        <article className="flex flex-col">
            <section className="w-1/3 mx-auto">
                <h2 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">
                    {t("help-center.title")}
                </h2>
                <article className="flex flex-col mx-auto my-4">
                    <section className="px-6 py-4 border rounded-xl mt-4">
                        <h2 className="text-center text-3xl font-bold tracking-tighter">
                            {t("help-center.title-1")}
                        </h2>
                        <p>{t("help-center.text-1")}</p>
                    </section>
                    <section className="px-6 py-4 border rounded-xl mt-4">
                        <h2 className="text-center text-3xl font-bold tracking-tighter">
                            {t("help-center.title-2")}
                        </h2>
                        <p>{t("help-center.text-2")}</p>
                    </section>
                    <section className="px-6 py-4 border rounded-xl mt-4">
                        <h2 className="text-center text-3xl font-bold tracking-tighter">
                            {t("help-center.title-3")}
                        </h2>
                        <p>{t("help-center.text-2")}</p>
                    </section>
                </article>
            </section>
        </article>
    );
}

export default HelpPage;