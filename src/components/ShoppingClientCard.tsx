import Image from "next/image";

import removeItem from "@/assets/icons/trash.svg";

const ShoppingClientCard = () => {
    return (
        <section className="flex w-[31%] mt-4 border rounded-xl">
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
            </section>
        </section>
    );
}

export default ShoppingClientCard;