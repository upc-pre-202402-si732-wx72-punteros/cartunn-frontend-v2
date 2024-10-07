import environment from "@/environments/enviroment";

const postProductRefund = async (id: number, title: string, description: string) => {
    const token = localStorage.getItem("token");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            id: id,
            title: title,
            description: description,
            status: "In progress"
        }),
    };

    try {
        const response = await fetch(`${environment.serverBasePath}/product-refund`, requestOptions);

        if (!response.ok) throw new Error("Error registering product refund");

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Network error or server error");
    }
};

export default postProductRefund;