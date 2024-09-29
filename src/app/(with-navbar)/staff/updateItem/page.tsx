const UpdateItemPage = () => {
    return (
        <article>
            <section className="flex items-center w-1/4 mx-auto my-40 px-16">
                <section className="w-full">
                    <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">Update item</h1>
                    <section className="flex flex-col mx-auto my-4">
                        <section className="flex">
                            <input
                                type="text"
                                placeholder="Id"
                                className="c-input__input w-2/6 mr-2"
                            />
                            <input
                                type="text"
                                placeholder="Enter the new title order"
                                className="c-input__input w-4/6"
                            />
                        </section>
                        <input
                            type="text"
                            placeholder="Enter the new description"
                            className="c-input__input mt-2"
                        />
                        <input
                            type="text"
                            placeholder="Enter the new image url"
                            className="c-input__input mt-2"
                        />
                        <input
                            type="number"
                            placeholder="Enter the new price"
                            className="c-input__input mt-2"
                        />
                        <button
                            className="c-button my-2 py-4 font-semibold"
                        >
                            Upload item
                        </button>
                    </section>
                </section>
            </section>
        </article>
    );
}

export default UpdateItemPage;