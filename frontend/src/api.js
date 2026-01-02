const API_URL = process.env.REACT_APP_API_URL;

export async function getCategories() {
  const res = await fetch(`${API_URL}/categories`);
  return res.json();
}

export async function getArtisans() {
  const res = await fetch(`${API_URL}/artisans`);
  return res.json();
}

export async function getArtisan(id) {
  const res = await fetch(`${API_URL}/artisans/${id}`);
  return res.json();
}

export async function searchArtisans(q = "", categoryId = "", city = "") {
  const params = new URLSearchParams();
  if (q) params.append("q", q);
  if (categoryId) params.append("categoryId", categoryId);
  if (city) params.append("city", city);

  const res = await fetch(`${API_URL}/artisans/search?${params.toString()}`);
  return res.json();
}