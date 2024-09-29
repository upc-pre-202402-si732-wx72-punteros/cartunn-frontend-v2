import Image from "next/image"

import information from "@/assets/images/information.svg"

const AllReportsPage = () => {
    return (
        <article>
            <span className="text-2xl font-extrabold tracking-tighter">All reports</span>
            <article>
                <section className="flex flex-col px-6 py-4 border rounded-xl mt-4 w-1/5">
                    <h2 className="ml-2 text-xl font-extrabold tracking-tighter">Status report</h2>
                    <span className="my-2 italic">MG ZX Exclusice Black Premium 265l.</span>
                    <section className="flex justify-between">
                        <span className="font-semibold text-slate-400 tracking-tighter">12/18/2004</span>
                        <div className="flex">
                            <Image src={information} alt="information" width={25} height={25} />
                            <span className="ml-2">In progress</span>
                        </div>
                    </section>
                </section>
            </article>
        </article>
    );
}

export default AllReportsPage;