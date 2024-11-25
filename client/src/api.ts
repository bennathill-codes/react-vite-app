import axios from "axios";

const URL = "http://localhost:3000";

export async function getUsers() {
  const response = await axios.get(`${URL}/users`);

  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function getUser(id: string) {
  const response = await axios.get(`${URL}/users/${id}`);

  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function createUser(user: object) {
  const response = await axios.post(`${URL}/users`, user);

  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function updateUser(id: string, user: object) {
  const response = await axios.put(`${URL}/users/${id}`, user);

  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function deleteUser(id: string) {
  const response = await axios.delete(`${URL}/users/${id}`);

  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}
