import { instance } from "../axios.js";

export const getContacts = async () => {
  const data = await instance.get("/contacts");
  return data;
};

export const deleteContact = async (id) => {
  const data = await instance.delete(`/contacts/${id}`);
  return data;
};

export const createContact = async (contact) => {
  const data = await instance.post(`/contacts`, contact);
  return data;
};

export const updateContact = async (id, contact) => {
  const data = await instance.patch(`/contacts/${id}`, contact);
  return data;
};
