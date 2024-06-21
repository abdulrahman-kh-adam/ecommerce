export const uploadCategory = async (catName, catColor, catImage) => {
  const imgReq = await fetch(`${process.env.REACT_APP_API_URL}/upload`, {
    method: "POST",
    body: catImage,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_MAIN_TOKEN}`,
    },
  });
  const imgRes = await imgReq.json();
  const infoReq = await fetch(`${process.env.REACT_APP_API_URL}/categories`, {
    method: "POST",
    body: JSON.stringify({
      data: {
        name: catName,
        color: catColor,
        image: imgRes[0].id,
      },
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_MAIN_TOKEN}`,
    },
  });
  const infoRes = await infoReq.json();
  return await [imgRes, infoRes];
};
