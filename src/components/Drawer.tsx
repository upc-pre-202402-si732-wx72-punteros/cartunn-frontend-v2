"use client"
import Image from "next/image";
import { Drawer, DrawerBody, DrawerHeader, DrawerFooter, DrawerOverlay, DrawerContent, DrawerCloseButton, Divider, useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import Link from "next/link";

import LanguageDropdown from "@/components/LanguageDropdown";
import menuIcon from "@/assets/icons/menu-1.svg";
import productList from "@/assets/icons/document-text.svg";
import favorites from "@/assets/icons/heart.svg";
import notifications from "@/assets/icons/notification.svg"
import reports from "@/assets/icons/document-text.svg";
import shoppingCart from "@/assets/icons/shopping-cart.svg";
import uploadItem from "@/assets/icons/additem.svg";
import updateItem from "@/assets/icons/arrange-square-2.svg";
import removeItem from "@/assets/icons/trash.svg";
import manageReturns from "@/assets/icons/receipt.svg";
import settings from "@/assets/icons/setting-2.svg";
import help from "@/assets/icons/message.svg";
import logout from "@/assets/icons/logout-1.svg";

type DrawerDashboardProps = {
    typeUser: string,
    name: string
}

const DrawerDashborad = (props: DrawerDashboardProps) => {
    const { t } = useTranslation("global");
    const { isOpen, onToggle } = useDisclosure()
    const btnRef = useRef<HTMLImageElement | null>(null);

    return (
        <>
            <section className="flex justify-between items-end px-16 pt-12">
                <section className="flex items-end">
                    <Image
                        src={menuIcon}
                        alt="menu"
                        ref={btnRef}
                        onClick={onToggle}
                    />
                    <span className="ml-4 text-2xl font-extrabold tracking-tighter">​​CARTUNN DASHBOARD / {props.typeUser} - {decodeURI(props.name)}</span>
                </section>
                <LanguageDropdown />
            </section>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onToggle}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <h2 className="mt-8 text-2xl text-center font-bold tracking-tighter">{t("drawer.title")}</h2>
                    </DrawerHeader>
                    <DrawerBody>
                        <ul className="flex flex-col">
                            <span className="mb-4 px-4 text-xl font-semibold tracking-tighter">PRINCIPAL</span>
                            { props.typeUser === "client" ? (
                                <>
                                <Divider />
                                <li className="my-5 px-4">
                                    <Link
                                        href={`/${props.typeUser}/home`}
                                        onClick={onToggle}
                                        className="flex"
                                    >
                                        <Image
                                            src={productList}
                                            alt="products list"
                                            className="mr-2"
                                        />
                                        {t("drawer.client.products-list")}
                                    </Link>
                                </li>
                                <Divider />
                                <li className="my-5 px-4">
                                    <Link
                                        href={`/${props.typeUser}/upload-item`}
                                        onClick={onToggle}
                                        className="flex"
                                    >
                                        <Image
                                            src={favorites}
                                            alt="favorites"
                                            className="mr-2"
                                        />
                                        {t("drawer.client.favorite-list")}
                                    </Link>
                                </li>
                                <Divider />
                                <li className="my-5 px-4">
                                    <Link
                                        href={`/${props.typeUser}/home`}
                                        onClick={onToggle}
                                        className="flex"
                                    >
                                        <Image
                                            src={notifications}
                                            alt="notifications"
                                            className="mr-2"
                                        />
                                        {t("drawer.client.your-notifications")}
                                    </Link>
                                </li>
                                <Divider />
                                <li className="my-5 px-4">
                                    <Link
                                        href={`/${props.typeUser}/home`}
                                        onClick={onToggle}
                                        className="flex"
                                    >
                                        <Image
                                            src={reports}
                                            alt="reports"
                                            className="mr-2"
                                        />
                                        {t("drawer.client.all-reports")}
                                    </Link>
                                </li>
                                <Divider />
                                <li className="my-5 px-4">
                                    <Link
                                        href={`/${props.typeUser}/home`}
                                        onClick={onToggle}
                                        className="flex"
                                    >
                                        <Image
                                            src={shoppingCart}
                                            alt="shopping cart"
                                            className="mr-2"
                                        />
                                        {t("drawer.client.shopping-cart")}
                                    </Link>
                                </li>
                                <Divider />
                                </>
                            ): (
                                <>
                                <Divider />
                                <li className="my-5 px-4">
                                    <Link
                                        href={`/${props.typeUser}/home`}
                                        onClick={onToggle}
                                        className="flex"
                                    >
                                        <Image
                                            src={productList}
                                            alt="orders list"
                                            className="mr-2"
                                        />
                                        {t("drawer.staff.orders-list")}
                                    </Link>
                                </li>
                                <Divider />
                                <li className="my-4 px-4">
                                    <Link
                                        href={`/${props.typeUser}/upload-item`}
                                        onClick={onToggle}
                                        className="flex"
                                    >
                                        <Image
                                            src={uploadItem}
                                            alt="upload item"
                                            className="mr-2"
                                        />
                                        {t("drawer.staff.upload-item")}
                                    </Link>
                                </li>
                                <Divider />
                                <li className="my-4 px-4">
                                    <Link
                                        href={`/${props.typeUser}/update-item`}
                                        onClick={onToggle}
                                        className="flex"
                                    >
                                        <Image
                                            src={updateItem}
                                            alt="update item"
                                            className="mr-2"
                                        />
                                        {t("drawer.staff.update-item")}
                                    </Link>
                                </li>
                                <Divider />
                                <li className="my-4 px-4">
                                    <Link
                                        href={`/${props.typeUser}/remove-item`}
                                        onClick={onToggle}
                                        className="flex"
                                    >
                                        <Image
                                            src={removeItem}
                                            alt="remove item"
                                            className="mr-2"
                                        />
                                        {t("drawer.staff.remove-item")}
                                    </Link>
                                </li>
                                <Divider />
                                <li className="my-4 px-4">
                                    <Link
                                        href={`/${props.typeUser}/manage-returns`}
                                        onClick={onToggle}
                                        className="flex"
                                    >
                                        <Image
                                            src={manageReturns}
                                            alt="manage returns"
                                            className="mr-2"
                                        />
                                        {t("drawer.staff.manage-returns")}
                                    </Link>
                                </li>
                                <Divider />
                                </>
                            )}
                            <span className="mt-6 mb-2 px-4 text-xl font-semibold tracking-tighter">Preferences</span>
                            <li className="my-5 px-4">
                                <Link
                                    href="/configurations"
                                    onClick={onToggle}
                                    className="flex"
                                >
                                    <Image
                                        src={settings}
                                        alt="settings"
                                        className="mr-2"
                                    />
                                    {t("drawer.configurations")}
                                </Link>
                            </li>
                            <Divider />
                            <li className="my-5 px-4">
                                <Link
                                    href="/help"
                                    onClick={onToggle}
                                    className="flex"
                                >
                                    <Image
                                        src={help}
                                        alt="help"
                                        className="mr-2"
                                    />
                                    {t("drawer.help-center")}
                                </Link>
                            </li>
                            <Divider />
                        </ul>
                    </DrawerBody>
                    <DrawerFooter>
                        <section className="flex justify-self-start w-full my-5 px-4">
                            <Link
                                href="/login"
                                onClick={onToggle}
                                className="flex"
                            >
                                <Image
                                    src={logout}
                                    alt="logout"
                                    className="mr-2"
                                />
                                {t("drawer.logout")}
                            </Link>
                        </section>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default DrawerDashborad;