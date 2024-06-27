export const uploadSubcategory = async (subName, parentId) => {
  const bodyData = JSON.stringify({
    data: {
      name: subName,
      slug: subName.replaceAll(" ", "_").toLowerCase(),
      parent_category: Number(parentId),
    },
  });

  const req = await fetch(`${process.env.REACT_APP_API_URL}/subcategories`, {
    method: "POST",
    body: bodyData,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_MAIN_TOKEN}`,
    },
  });
  const res = req.json();
  return res;
};
