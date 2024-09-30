import { ChakraProvider } from "@chakra-ui/react";

export default function AccountLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    );
}