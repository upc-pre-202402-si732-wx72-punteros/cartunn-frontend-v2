"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import environment from "@/environments/enviroment";

const RemoveItemPage = () => {
    const [itemId, setItemId] = useState(0);

    const deleteItemHandler = async () => {
        const token = localStorage.getItem("token");

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await fetch(`${environment.serverBasePath}/products/${itemId}`, requestOptions);

            if (!response.ok) {
                throw new Error("Error deleting item");
            }

            return "Item deleting successfully";
        } catch (error) {
            console.error(error);
            throw new Error("Network error or server error");
        }
    };

    const notify = () => {
        toast.promise(
            deleteItemHandler(),
            {
                loading: "Eliminando item...",
                success: "Item eliminado correctamente",
                error: "Error: No se pudo eliminar el item 😔",
            }
        );
    };

    return (
        <article className="flex items-center w-full sm:w-1/2 xl:w-1/5 my-64 m-auto">
            <Toaster />
            <section className="w-full">
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">Remove item</h1>
                <section className="flex flex-col mx-auto my-4">
                    <input
                        type="number"
                        placeholder="Enter the id"
                        className="c-input__input"
                        onChange={(e) => setItemId(parseInt(e.target.value))}
                    />
                    <button
                        className="c-button my-2 py-4 font-semibold"
                        onClick={notify}
                    >
                        Remove
                    </button>
                </section>
            </section>
        </article>
    );
}

export default RemoveItemPage;