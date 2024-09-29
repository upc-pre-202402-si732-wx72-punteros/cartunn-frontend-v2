import Image from "next/image"

import information from "@/assets/images/information.svg"

const YourNotificationsPage = () => {
    return (
        <article>
            <span className="text-2xl font-extrabold tracking-tighter">Your notifications</span>
            <article>
                <section className="flex flex-col px-6 py-4 border rounded-xl mt-4 w-1/5">
                    <div className="flex my-2">
                        <Image src={information} alt="information" width={25} height={25} />
                        <h2 className="ml-2 text-xl font-extrabold tracking-tighter">Information</h2>
                    </div>
                    <span className="my-2 italic text-sm">Your car has entered the mechanical workshop.</span>
                    <div className="flex justify-between">
                        <span>Delivery date:</span>
                        <span className="font-bold tracking-tighter">12/18/2004</span>
                    </div>
                </section>
            </article>
        </article>
    );
}

export default YourNotificationsPage;