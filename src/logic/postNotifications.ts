import environment from "@/environments/enviroment";

const postNotification = async (id: number, type: string, description: string) => {
    const token = localStorage.getItem("token");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            orderId: id,
            type: type,
            description: description
        }),
    };

    try {
        const response = await fetch(`${environment.serverBasePath}/notifications`, requestOptions);

        if (!response.ok) throw new Error("Error registering notification");

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Network error or server error");
    }
};

export default postNotification;