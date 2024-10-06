import environment from "@/environments/enviroment";

const postOrder = async (id: number, title: string, description: string) => {
    const token = localStorage.getItem("token");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            code: id,
            name: title,
            description: description,
            entryDate: "2024-10-05",
            exitDate: "2024-10-05",
            status: "In progress"
        }),
    };

    try {
        const response = await fetch(`${environment.serverBasePath}/orders`, requestOptions);

        if (!response.ok) throw new Error("Error registering order");

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Network error or server error");
    }
};

export default postOrder;