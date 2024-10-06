import Image from "next/image"

import information from "@/assets/images/information.svg"

const YourNotificationsPage = () => {
    return (
        <article className="">
            <span className="text-2xl font-extrabold tracking-tighter">Your notifications</span>
            <article className="flex flex-wrap gap-x-4">
                <section className="flex flex-col w-[24%] mt-4 px-6 py-4 border rounded-xl">
                    <section className="flex justify-between my-2">
                        <section className="flex">
                            <Image src={information} alt="information" width={25} height={25} />
                            <h2 className="ml-2 text-xl font-extrabold tracking-tighter">Information</h2>
                        </section>
                        <span className="ml-2 text-xl font-extrabold tracking-tighter">Id product: #12</span>
                    </section>
                    <span className="my-2 italic text-sm">Your car has entered the mechanical workshop.</span>
                    <section className="flex justify-between">
                        <span>Type notification:</span>
                        <span className="font-bold tracking-tighter">Fast delivery</span>
                    </section>
                </section>
            </article>
        </article>
    );
}

export default YourNotificationsPage;