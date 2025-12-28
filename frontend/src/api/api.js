const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export default API_URL;

export async function getArtisans() {
  return fetch(`${API_URL}/artisans`).then(r => r.json());
}

export async function getArtisan(id) {
  return fetch(`${API_URL}/artisans/${id}`).then(r => r.json());
}

export async function getCategories() {
  return fetch(`${API_URL}/categories`).then(r => r.json());
}

export async function getArtisansByCategory(category) {
  return fetch(`${API_URL}/artisans?category=${category}`).then(r => r.json());
}

export async function searchArtisans(query) {
  return fetch(`${API_URL}/search?q=${query}`).then(r => r.json());
}