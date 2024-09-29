"use client"
import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const manageReturns = () => {
    const [stateOrder, setStateOrder] = useState("In progress");

    return (
        <article>
            <span className="text-2xl font-extrabold tracking-tighter">Manage returns</span>
            <article className="flex flex-wrap gap-x-8">
                <section className="flex flex-col w-[15%] mt-4 px-6 py-4 border rounded-xl">
                    <h2 className="mb-4 text-xl font-extrabold tracking-tighter">Id product: #123</h2>
                    <img
                        src="https://www.diariomotor.com/imagenes/2019/06/motor-v8-ford-mustang-shelby-gt500-0619-01-1280x854.webp"
                        alt="motor"
                        width={200}
                        height={200}
                        className="w-full rounded-lg"
                    />
                    <section className="flex flex-col mt-4">
                        <span className="font-bold tracking-tighter">Motor v8 de Lamborghini</span>
                        <span className="italic">Motor nuevo v8 de audi R8 de SVJ</span>
                        <section className="flex justify-between">
                            <span>status:</span>
                            <Menu isLazy>
                                <MenuButton>
                                    <section className="flex">
                                        <span className="ml-2">{stateOrder}</span>
                                    </section>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem
                                        px={6}
                                        py={3}
                                        _hover={{ bg: "gray.50" }}
                                        onClick={() => {setStateOrder("In progress")}}
                                    >
                                        In progress
                                    </MenuItem>
                                    <MenuItem
                                        px={6}
                                        py={3}
                                        _hover={{ bg: "gray.50" }}
                                        onClick={() => {setStateOrder("Done")}}
                                    >
                                        Done
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </section>
                    </section>
                </section>
            </article>
        </article>
    );
}

export default manageReturns;