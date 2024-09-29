import Image from "next/image";

import removeItem from "@/assets/icons/trash.svg";

const ShoppingCartPage = () => {
    return (
        <article>
            <span className="text-2xl font-extrabold tracking-tighter">Shopping cart</span>
            <article className="flex">
                <article className="w-4/6">
                    <section className="flex border rounded-xl mt-4 w-1/2">
                        <img
                            src="https://www.diariomotor.com/imagenes/2019/06/motor-v8-ford-mustang-shelby-gt500-0619-01-1280x854.webp"
                            alt="motor"
                            width={200}
                            height={200}
                            className="cover w-1/2 rounded-l-lg"
                        />
                        <section className="flex flex-col w-1/2 my-auto px-6">
                            <div className="flex justify-between">
                                <h2 className="text-xl font-extrabold tracking-tighter">Id product: #123</h2>
                                <Image src={removeItem} alt="favorites" />
                            </div>
                            <span className="italic">Motor v8 de Audi R8 SVJ</span>
                            <span className="font-bold tracking-tighter">$12000.02</span>
                            <button className="c-button mt-2 py-3 font-semibold">Order</button>
                        </section>
                    </section>
                </article>
                <section className="flex flex-col w-2/6">
                    <span className="text-2xl font-extrabold tracking-tighter">Resumen de pedido</span>
                    <span className="mt-4">Total: $225.00</span>
                </section>
            </article>
        </article>
    );
}

export default ShoppingCartPage;