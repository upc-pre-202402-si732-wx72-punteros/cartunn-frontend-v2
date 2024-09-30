const HelpPage = () => {
    return (
        <article className="flex flex-col">
            <section className="w-1/3 mx-auto">
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">Help & Center</h1>
                <section className="flex flex-col mx-auto my-4">
                    <div className="px-6 py-4 border rounded-xl mt-4">
                        <h2 className="text-center text-3xl font-bold tracking-tighter">🚘​ Will tuning affect my car's warranty?</h2>
                        <p>In general, making modifications to your car can affect the warranty, especially if these modifications are related to theengine or other major components. However, our team will ensure that any modifications made comply with the manufacturer'sstandards and specifications to minimize any warranty risk.</p>
                    </div>
                    <div className="px-6 py-4 border rounded-xl mt-4">
                        <h2 className="text-center text-3xl font-bold tracking-tighter">📄​ How long does it take to complete the tuning process?</h2>
                        <p>The time required to complete the tuning process may vary depending on the scope of the modifications and the availability of the necessary components. Our team will provide you with a detailed estimate of the waiting time once we have evaluated your car and agreed on the details of the work to be done.</p>
                    </div>
                    <div className="px-6 py-4 border rounded-xl mt-4">
                        <h2 className="text-center text-3xl font-bold tracking-tighter">🗂️​ How safe are the modifications made through the tuning service?</h2>
                        <p>Safety is our top priority. All modifications performed on your car are carried out by experienced professionals and adhere to the highest standards of quality and safety. In addition, we use proven quality components and perform extensive testing to ensure the reliability and safety of all modifications.</p>
                    </div>
                </section>
            </section>
        </article>
    );
}

export default HelpPage;