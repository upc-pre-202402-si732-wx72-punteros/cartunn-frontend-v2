"use client"
import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import ProductRefund from "@/interfaces/ProductRefund";

const RefundStaffCard = (props: ProductRefund) => {
    const { t } = useTranslation("global");
    const [stateOrder, setStateOrder] = useState(props.status);

    return (
        <section className="flex flex-col w-[15%] mt-4 px-6 py-4 border rounded-xl">
            <h2 className="text-xl font-extrabold tracking-tighter">
                {`${t("manage-returns.title-card")}: #${props.id}`}
            </h2>
            <section className="flex flex-col mt-4">
                <span className="font-bold tracking-tighter">{props.title}</span>
                <span className="italic">{props.description}</span>
                <section className="flex justify-between">
                    <span>
                        {`${t("manage-returns.status")}:`}
                    </span>
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
                                onClick={() => { setStateOrder("In progress") }}
                            >
                                In progress
                            </MenuItem>
                            <MenuItem
                                px={6}
                                py={3}
                                _hover={{ bg: "gray.50" }}
                                onClick={() => { setStateOrder("Done") }}
                            >
                                Done
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </section>
            </section>
        </section>
    );
}

export default RefundStaffCard;