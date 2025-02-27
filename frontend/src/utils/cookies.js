"use server";
import { cookies } from "next/headers";

export const setCookie = async (key, value, age) => {
  cookies().set(key, value, {maxAge: age, httpOnly:true, secure:true})
};

export const getCookie = async (key) => {
  return cookies().get(key);
};

export const removeCookie = async (...keys) => {
  keys.forEach((key) => {
    cookies().delete(key);
  });
};