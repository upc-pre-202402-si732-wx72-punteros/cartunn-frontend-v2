import environment from "@/environments/enviroment";

const postTunningTask = async (modifiedPart: string, date: string, status: string) => {
    const token = localStorage.getItem("token");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            modifiedPart: modifiedPart,
            date: date,
            status: status
        }),
    };

    try {
        const response = await fetch(`${environment.serverBasePath}/tunning-task`, requestOptions);

        if (!response.ok) throw new Error("Error registering notification");

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Network error or server error");
    }
};

export default postTunningTask;