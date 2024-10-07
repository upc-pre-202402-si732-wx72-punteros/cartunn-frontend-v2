import environment from "@/environments/enviroment";

const postProduct = async (title: string, description: string, image: string, price: number) => {
    const token = localStorage.getItem("token");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: title,
            description: description,
            image: image,
            price: price
        }),
    };

    try {
        const response = await fetch(`${environment.serverBasePath}/products`, requestOptions);

        if (!response.ok) throw new Error("Error registering item");

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Network error or server error");
    }
};

export default postProduct;