/*const Api = () => {
  //bieno-da12-d-930450-webapi-01.azurewebsites.net/api/getproduct/1
  //https://bieno-da12-d-930450-webapi-01.azurewebsites.net/api/getproduct/1
  return (
    <>
      <div
        style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "2rem" }}
      >
        <h3>GHG Footprint</h3>
        <p>
          Greenhouse gas or GHG emissions are defined as gas-base air pollution
          that contribute to climate change and global warming.The most common
          GHG emission is carbon dioxide, abbreviated CO2.
        </p>
        <hr style={{ borderColor: "#D3D3D3" }} />
      </div>
      <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
        <h3>Ingredients GHG Footprint</h3>
        <p>
          Gemo Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <hr style={{ borderColor: "#D3D3D3" }} />
      </div>
      <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
        <h3>Packaging GHG Footprint</h3>
        <p>Gero Ipsum is simply dummy text.</p>
        <hr style={{ borderColor: "#D3D3D3" }} />
      </div>
      <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
        <h3>Ingredients GHG Footprint</h3>
        <p>
          Greenhouse gas or GHG emissions are defined as gas-base air pollution
          that contribute to climate change and global warming.The most common
          GHG emission is carbon dioxide, abbreviated CO2.
        </p>
        <hr style={{ borderColor: "#D3D3D3" }} />
      </div>
      <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
        <h3>Ingredients GHG Footprint</h3>
        <p>
          Greenhouse gas or GHG emissions are defined as gas-base air pollution
          that contribute to climate change and global warming.The most common
          GHG emission is carbon dioxide, abbreviated CO2.
        </p>
      </div>
    </>
  );
};

export default Api;*/

export const data = async () => ({
  product: {
    ean: "1234567890123",
    title: "Dove Shampoo",
    subtitle: "Intense repair",
    product_detail: {
      title: "Product Details",
      co2: {
        ghg: ["46%", "54%", "36%"],
      },
      sustainibility: {
        ghg: "30%",
        palm_oil: "5%",
        parabens: "0%",
        pfas: "2%",
        pthalates: "0%",
      },
      recycling: {
        plastic: "60%",
        cardboard: "100%",
      },
      made: "Indonesia",
      renewable: "100%",
      waste: "0%",
      unstressed: "100%",
      factory: "46%",
    },
    glossary: {
      ghg_footprint:
        "Greenhouse gas or GHG emissions are defined as gas-based air pollution that contribute to climate change and global warming. The most common GHG emission is carbon dioxide, abbreviated CO2.",
      ingredients_ghg_footprint:
        "Gemo Ipsum is simply dummy text of the printing and typesetting industry.",
      packaging_ghg_footprint:
        "Gero Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      recycled_plastic:
        "Gero Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      sustainably_sourced_material:
        "Gero Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  },
});

export const api = async (productNumber) => {
  try {
    const response = await fetch(
      `https://bieno-da12-d-930450-webapi-01.azurewebsites.net/api/getproduct/${productNumber}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // "Content-Type": "Authorization",
          "Access-Control-Allow-Origin": "*",
          // mode: "cors",
        },
      }
    );
    const res = await response.json();
    return res.product;
  } catch (error) {
    console.error("Error fetching from API gateway:", error);
  }
};
