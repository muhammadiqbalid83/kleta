const url =
  "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=9&categories=men_all&concepts=H%26M%20MAN";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d0eddb6ac7msh4e57bdb2c26b1d9p1debeajsn90fa0346cad1",
    "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
  },
};

export async function getProducts() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
