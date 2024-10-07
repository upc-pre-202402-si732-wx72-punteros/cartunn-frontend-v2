import environment from "@/environments/enviroment";

const getTunningTasks = async () => {
    const token = localStorage.getItem("token");

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    };

    try {
        const response = await fetch(`${environment.serverBasePath}/tunning-task`, requestOptions);

        if (!response.ok) throw new Error("Error fetching tunning task");

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export default getTunningTasks;