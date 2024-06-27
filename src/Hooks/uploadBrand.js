export const uploadBrand = async (brandName, brandImage) => {
  const imgReq = await fetch(`${process.env.REACT_APP_API_URL}/upload`, {
    method: "POST",
    body: brandImage,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_MAIN_TOKEN}`,
    },
  });
  const imgRes = await imgReq.json();
  const infoReq = await fetch(`${process.env.REACT_APP_API_URL}/brands`, {
    method: "POST",
    body: JSON.stringify({
      data: {
        name: brandName,
        image: imgRes[0].id,
        slug: brandName.replaceAll(" ", "_").toLowerCase(),
      },
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_MAIN_TOKEN}`,
    },
  });
  const infoRes = await infoReq.json();
  return [imgRes, infoRes];
};
