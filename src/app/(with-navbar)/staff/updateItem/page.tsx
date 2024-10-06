"use client"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import putProduct from "@/logic/putProduct";

const UpdateItemPage = () => {
    const [item, setItem] = useState({id: 0, title: "", description: "", image: "", price: 0});

    const notify = () => {
        toast.promise(
            putProduct(item.id, item.title, item.description, item.image, item.price), {
                loading: "Actualizando item...",
                success: "Item actualizado correctamente",
                error: "Error: No se actualizó el item 😔",
            }
        );
    };

    return (
        <section className="flex items-center w-full sm:w-1/2 xl:w-1/5 my-40 m-auto">
            <Toaster />
            <section className="w-full">
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">Update item</h1>
                <section className="flex flex-col mx-auto my-4">
                    <section className="flex">
                        <input
                            type="number"
                            placeholder="Id"
                            className="c-input__input w-2/6 mr-2"
                            onChange={(e) => setItem({...item, id: parseInt(e.target.value)})}
                        />
                        <input
                            type="text"
                            placeholder="Enter the new title order"
                            className="c-input__input w-4/6"
                            onChange={(e) => setItem({...item, title: e.target.value})}
                        />
                    </section>
                    <input
                        type="text"
                        placeholder="Enter the new description"
                        className="c-input__input mt-2"
                        onChange={(e) => setItem({...item, description: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Enter the new image url"
                        className="c-input__input mt-2"
                        onChange={(e) => setItem({...item, image: e.target.value})}
                    />
                    <input
                        type="number"
                        placeholder="Enter the new price"
                        className="c-input__input mt-2"
                        onChange={(e) => setItem({...item, price: parseInt(e.target.value)})}
                    />
                    <button
                        className="c-button my-2 py-4 font-semibold"
                        onClick={notify}
                    >
                        Upload item
                    </button>
                </section>
            </section>
        </section>
    );
}

export default UpdateItemPage;