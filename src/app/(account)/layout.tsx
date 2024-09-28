import { ChakraProvider } from "@chakra-ui/react";

export default function AccountLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main className="px-16 mt-4">
                {children}
            </main>
        </>
    );
}