const API_BASE_URL = "http://localhost:4000/api"; 

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
};
