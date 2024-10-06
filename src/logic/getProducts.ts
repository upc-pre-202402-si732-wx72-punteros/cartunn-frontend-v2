import environment from "@/environments/enviroment";

const getProducts = async () => {
    const token = localStorage.getItem("token");

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    };

    try {
        const response = await fetch(`${environment.serverBasePath}/products`, requestOptions);

        if (!response.ok) throw new Error("Error fetching products");

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export default getProducts;