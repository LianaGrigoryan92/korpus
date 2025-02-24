export const getImageUrl = (image: any) => {
  if (!image?.data?.attributes?.url) return "";

  const baseUrl = (process.env.NEXT_PUBLIC_STRAPI_URL || "http://admin.korpus.am").replace(/\/$/, ""); // Remove trailing slash
  const imageUrl = image.data.attributes.url.replace(/^\//, ""); // Remove leading slash

  return `${baseUrl}/${imageUrl}`;
};

