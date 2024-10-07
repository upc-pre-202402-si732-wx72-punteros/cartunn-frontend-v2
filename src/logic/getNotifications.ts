import environment from "@/environments/enviroment";

const getNotifications = async () => {
    const token = localStorage.getItem("token");

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    };

    try {
        const response = await fetch(`${environment.serverBasePath}/notifications`, requestOptions);

        if (!response.ok) throw new Error("Error fetching notifications");

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export default getNotifications;