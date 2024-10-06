const AllReportsPage = () => {
    return (
        <article>
            <span className="text-2xl font-extrabold tracking-tighter">All reports</span>
            <article className="flex flex-wrap gap-x-4">
                <section className="flex flex-col w-[24%] mt-4 px-6 py-4 border rounded-xl">
                    <h2 className="text-xl font-extrabold tracking-tighter">Tunning task</h2>
                    <span className="my-2 italic">MG ZX Exclusice Black Premium 265l.</span>
                    <section className="flex justify-between">
                        <span className="font-semibold text-slate-400 tracking-tighter">Date:</span>
                        <span>2024-05-06</span>
                    </section>
                    <section className="flex justify-between">
                        <span className="font-semibold text-slate-400 tracking-tighter">Status:</span>
                        <span>In progress</span>
                    </section>
                </section>
            </article>
        </article>
    );
}

export default AllReportsPage;