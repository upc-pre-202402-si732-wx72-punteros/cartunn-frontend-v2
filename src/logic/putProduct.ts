import environment from "@/environments/enviroment";

const putProduct = async (id: number, title: string, description: string, image: string, price: number) => {
    const token = localStorage.getItem("token");

    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            id: id,
            title: title,
            description: description,
            image: image,
            price: price
        }),
    };

    try {
        const response = await fetch(`${environment.serverBasePath}/products/${id}`, requestOptions);

        if (!response.ok) throw new Error("Error updating item");

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Network error or server error");
    }
};

export default putProduct;