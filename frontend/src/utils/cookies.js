"use server";
import { cookies } from "next/headers";

export const setCookie = async (key, value, age) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value, { maxAge: age, httpOnly: true, secure: true });
};

export const getCookie = async (key) => {
  const cookieStore = await cookies();
  return cookieStore.get(key);
};

export const removeCookie = async (...keys) => {
  const cookieStore = await cookies();
  keys.forEach((key) => {
    cookieStore.delete(key);
  });
};