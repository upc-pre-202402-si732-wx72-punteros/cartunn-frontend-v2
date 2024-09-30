"use client"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import environment from "@/environments/enviroment";

const UploadItemPage = () => {
    const [item, setItem] = useState({title: "", description: "", image: "", price: 0});

    const uploadItemHandler = async () => {
        const token = localStorage.getItem("token");

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                title: item.title,
                description: item.description,
                image: item.image,
                price: item.price,
            }),
        };

        try {
            const response = await fetch(`${environment.serverBasePath}/products`, requestOptions);

            if (!response.ok) throw new Error("Error registering item");

            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error);
            throw new Error("Network error or server error");
        }
    };

    const notify = () => {
        toast.promise(
            uploadItemHandler(), {
                loading: "Subiendo item...",
                success: "Item subido correctamente",
                error: "Error: No se pudo subir el item 😔",
            }
        );
    };

    return (
        <article className="flex items-center w-full sm:w-1/2 xl:w-1/5 my-40 m-auto">
            <Toaster />
            <section className="w-full">
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">Upload item</h1>
                <section className="flex flex-col mx-auto my-4">
                    <input
                        type="text"
                        placeholder="Enter the title order"
                        className="c-input__input"
                        onChange={(e) => setItem({...item, title: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Enter the description"
                        className="c-input__input mt-2"
                        onChange={(e) => setItem({...item, description: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Enter the image url"
                        className="c-input__input mt-2"
                        onChange={(e) => setItem({...item, image: e.target.value})}
                    />
                    <input
                        type="number"
                        placeholder="Enter the price"
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
        </article>
    );
}

export default UploadItemPage;