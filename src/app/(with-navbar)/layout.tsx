"use client"
import { ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import DrawerDashboard from "@/components/Drawer";

export default function WithNavbarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    let cadena = pathname.split('/');
    const typeUser = cadena[1];
    const nameUser = cadena[2];

    return (
        <ChakraProvider>
            <DrawerDashboard typeUser={typeUser} name={nameUser} />
            <main className="px-16 mt-4">
                {children}
            </main>
        </ChakraProvider>
    );
}