export async function fetchPexelsImage(query: string) {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
    {
      headers: {
        Authorization: "ZGDlhuG6jTfHrOsbjlx204TYw3eiBSPsvlxb4iKiv8xZl35G4b6fmNkL"
      }
    }
  );

  const data = await response.json();
  return data.photos?.[0]?.src?.medium || null;
}
