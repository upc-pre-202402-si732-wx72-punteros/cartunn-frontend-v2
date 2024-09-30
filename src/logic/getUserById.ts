import environment from "@/environments/enviroment";

const getUserByData = (id: number) => {
    const fetchData = async () => {
        try {
            const response = await fetch(`${environment.serverBasePath}/users/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}

export default getUserByData;