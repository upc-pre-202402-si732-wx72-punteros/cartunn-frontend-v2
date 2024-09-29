"use client"
import { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const HomePage = () => {
    const [stateOrder, setStateOrder] = useState("In progress");

    return (
        <article>
            <span className="text-2xl font-extrabold tracking-tighter">Orders list</span>
            <section className="flex justify-between">
                <TableContainer className="w-full mt-4">
                    <Table variant="simple" colorScheme="gray">
                        <Thead>
                            <Tr>
                                <Th textAlign="center">ID</Th>
                                <Th textAlign="center">Title order</Th>
                                <Th textAlign="center">Description</Th>
                                <Th textAlign="center">Entry</Th>
                                <Th textAlign="center">Exit</Th>
                                <Th textAlign="center">Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td textAlign="center">25</Td>
                                <Td textAlign="center">Motor v8 Audi R8 SVJ</Td>
                                <Td textAlign="center">Motor usado en lamborghinis desde 2009</Td>
                                <Td textAlign="center">
                                    <input type="date" value="2018-07-22" />
                                </Td>
                                <Td textAlign="center">
                                    <input type="date" />
                                </Td>
                                <Td textAlign="center">
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
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </section>
        </article>
    );
};

export default HomePage;