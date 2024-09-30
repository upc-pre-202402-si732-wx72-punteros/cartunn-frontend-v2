import environment from "@/environments/enviroment";

const getAllUsers = () => {
    const fetchData = async () => {
        try {
            const response = await fetch(`${environment.serverBasePath}/users`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}

export default getAllUsers;