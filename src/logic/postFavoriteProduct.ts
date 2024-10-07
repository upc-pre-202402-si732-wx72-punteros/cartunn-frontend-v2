import environment from "@/environments/enviroment";

const postFavoriteProduct = async (id: number) => {
    const token = localStorage.getItem("token");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            productId: id
        }),
    };

    try {
        const response = await fetch(`${environment.serverBasePath}/favorites`, requestOptions);

        if (!response.ok) throw new Error("Error registering item");

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Network error or server error");
    }
};

export default postFavoriteProduct;