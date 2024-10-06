"use client"
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Image from "next/image";

import deleteIcon from "@/assets/icons/trash.svg";

import Order from "@/interfaces/Order";
import getOrders from "@/logic/getOrders";
import deleteOrderById from "@/logic/deleteOrderById";
import postNotification from "@/logic/postNotifications";
import postTunningTask from "@/logic/postTunningTask";

const HomePage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [notification, setNotification] = useState({ type: "", description: "" });
    const [tunningTask, setTunningTask] = useState({ modifiedPart: "", date: "" });

    const getData = async () => {
        const response = await getOrders();
        setOrders(response);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleExitDateChange = (orderId: number, newDate: string) => {
        const updatedOrders = orders.map(order =>
            order.id === orderId ? { ...order, exitDate: newDate } : order
        );
        setOrders(updatedOrders);
    };

    const handleStatusChange = (orderId: number, newStatus: string) => {
        const updatedOrders = orders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        );
        setOrders(updatedOrders);
    };

    const notificationHandler = (orderId: number) => {
        toast.promise(
            postNotification(orderId, notification.type, notification.description), {
                loading: "Notificando...",
                success: "Notificación enviada",
                error: "Error: No se notificó 😔",
            }
        );
    };

    const tunningTaskHandler = (orderId: number) => {
        const order = orders.find(o => o.id === orderId);
        if (!order) return;

        toast.promise(
            postTunningTask(tunningTask.modifiedPart, tunningTask.date, order.status), {
                loading: "Reportando...",
                success: "Reporte enviado",
                error: "Error: No se reportó 😔",
            }
        );
    };

    const deleteOrderHandler = (orderId: number) => {
        toast.promise(
            deleteOrderById(orderId), {
                loading: "Eliminando orden...",
                success: "Orden eliminada correctamente",
                error: "Error: No se eliminó la orden 😔",
            }
        );
    };

    return (
        <article>
            <Toaster />
            <span className="text-2xl font-extrabold tracking-tighter">Orders list</span>
            <section className="flex justify-between">
                <TableContainer className="w-full mt-4">
                    <Table variant="simple" colorScheme="gray">
                        <Thead>
                            <Tr>
                                <Th textAlign="center">ID</Th>
                                <Th textAlign="center">Title order</Th>
                                <Th textAlign="center">Product description</Th>
                                <Th textAlign="center">Type notification</Th>
                                <Th textAlign="center">Description notification</Th>
                                <Th textAlign="center">Notification</Th>
                                <Th textAlign="center">Entry</Th>
                                <Th textAlign="center">Modified part</Th>
                                <Th textAlign="center">Exit</Th>
                                <Th textAlign="center">Status</Th>
                                <Th textAlign="center">Reports</Th>
                                <Th textAlign="center">Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {orders.map((order) => (
                                <Tr key={order.id}>
                                    <Td textAlign="center">{order.code}</Td>
                                    <Td textAlign="center">{order.name}</Td>
                                    <Td textAlign="center">{order.description}</Td>
                                    <Td textAlign="center">
                                        <input
                                            type="text"
                                            className="px-4 py-2 bg-slate-50 rounded border"
                                            onChange={(e) =>
                                                setNotification({ ...notification, type: e.target.value })
                                            }
                                        />
                                    </Td>
                                    <Td textAlign="center">
                                        <input
                                            type="text"
                                            className="px-4 py-2 bg-slate-50 rounded border"
                                            onChange={(e) =>
                                                setNotification({ ...notification, description: e.target.value })
                                            }
                                        />
                                    </Td>
                                    <Td textAlign="center">
                                        <button
                                            className="c-button px-4 py-2 font-semibold"
                                            onClick={() => notificationHandler(order.id)}
                                        >
                                            Notify
                                        </button>
                                    </Td>
                                    <Td textAlign="center">{order.entryDate}</Td>
                                    <Td textAlign="center">
                                        <input
                                            type="text"
                                            className="px-4 py-2 bg-slate-50 rounded border"
                                            onChange={(e) =>
                                                setTunningTask({ ...tunningTask, modifiedPart: e.target.value })
                                            }
                                        />
                                    </Td>
                                    <Td textAlign="center">
                                        <input
                                            type="date"
                                            value={order.exitDate}
                                            onChange={(e) =>
                                                handleExitDateChange(order.id, e.target.value)
                                            }
                                        />
                                    </Td>
                                    <Td textAlign="center">
                                        <Menu isLazy>
                                            <MenuButton>
                                                <section className="flex">
                                                    <span className="ml-2">{order.status}</span>
                                                </section>
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem
                                                    px={6}
                                                    py={3}
                                                    _hover={{ bg: "gray.50" }}
                                                    onClick={() => handleStatusChange(order.id, "In progress")}
                                                >
                                                    In progress
                                                </MenuItem>
                                                <MenuItem
                                                    px={6}
                                                    py={3}
                                                    _hover={{ bg: "gray.50" }}
                                                    onClick={() => handleStatusChange(order.id, "Done")}
                                                >
                                                    Done
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                    <Td textAlign="center">
                                        <button
                                            className="c-button px-4 py-2 font-semibold"
                                            onClick={() => tunningTaskHandler(order.id)}
                                        >
                                            Report
                                        </button>
                                    </Td>
                                    <Td>
                                        <Image
                                            src={deleteIcon}
                                            alt="Delete"
                                            width={24}
                                            onClick={() => {deleteOrderHandler(order.id)}}
                                        />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </section>
        </article>
    );
};

export default HomePage;