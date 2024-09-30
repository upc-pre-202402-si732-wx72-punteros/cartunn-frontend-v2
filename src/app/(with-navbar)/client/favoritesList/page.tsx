import Image from "next/image";

import removeItem from "@/assets/icons/trash.svg";

const FavoriteListPage = () => {
    return (
        <article>
            <span className="text-2xl font-extrabold tracking-tighter">Favorites list</span>
            <article className="flex flex-wrap gap-x-8">
                <section className="flex flex-col mt-4 w-[15%] border rounded-xl">
                    <img
                        src="https://www.diariomotor.com/imagenes/2019/06/motor-v8-ford-mustang-shelby-gt500-0619-01-1280x854.webp"
                        alt="motor"
                        width={200}
                        height={200}
                        className="w-full rounded-t-lg"
                    />
                    <section className="flex flex-col mt-4 pt-2 pb-6 px-6">
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
        </article>
    );
}

export default FavoriteListPage;