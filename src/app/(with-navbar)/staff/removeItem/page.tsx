const RemoveItemPage = () => {
    return (
        <article>
            <section className="flex items-center w-1/4 mx-auto my-60 px-16">
                <section className="w-full">
                    <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">Update item</h1>
                    <section className="flex flex-col mx-auto my-4">
                        <input
                            type="text"
                            placeholder="Enter the id"
                            className="c-input__input mr-2"
                        />
                        <button
                            className="c-button my-2 py-4 font-semibold"
                        >
                            Remove item
                        </button>
                    </section>
                </section>
            </section>
        </article>
    );
}

export default RemoveItemPage;