import crypto from "crypto";

import { User } from "@prisma/client";

const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  minimumFractionDigits: 0,
});

// const regex = '/\/v\d+\/([^/]+)\.\w{3,4}$/';
const regex = /\/([^/]+)\.\w+$/;

export const priceFormatter = (price: number) => `${formatter.format(price)}`;

export const exclude = (user: User, key: keyof User) => {
  delete user[key];

  return user;
};

export const getPublicIdCloudinary = (url: string) => {
  const match = url.match(regex);

  return match ? match[1] : "";
};

export const generateSHA1 =(data: string) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};

export const generateSignature = (publicId: string) => {
  const ts = new Date().getTime();
  
  return `public_id=${publicId}&timestamp=${ts}${process.env.CLOUDINARY_API_SECRET}`;
};

export const slugify = (text: string) => {
  return text
    .toString()                   
    .normalize("NFKD")           
    .toLowerCase()                
    .trim()                   
    .replace(/\s+/g, "-")        
    .replace(/[^\w\-]+/g, "")     
    .replace(/\_/g,"-")           
    .replace(/\-\-+/g, "-")      
    .replace(/\-$/g, "");
};

type NonEmptyObject<T> = {
  [K in keyof T]: T[K] extends string ? (T[K] extends "" ? never : T[K]) : T[K];
};

export function validateNonEmptyObject<T>(obj: NonEmptyObject<T>): boolean {
  for (const key in obj) {
    if (!obj[key]) {
      return false;
    }
  }
  return true;
};

export const uploadPhoto = async (data: FormData) => {
  data.append("upload_preset", process.env.CLOUDINARY_PRESET ?? "");
  data.append("folder", process.env.CLOUDINARY_FOLDER ?? "");
  data.append("resource_type", "raw");
  const uploadResponse = await fetch(
    `${process.env.CLOUDINARY_URL}/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  const uploadedImageData = await uploadResponse.json();

  return uploadedImageData.url;
};

export const removePhoto = async (photo: string) => {
  const publicId = getPublicIdCloudinary(photo);
  const signature = generateSHA1(generateSignature(`${process.env.CLOUDINARY_FOLDER ?? ""}/${publicId}`));
  const timestamp = new Date().getTime();

  const data = new FormData();
  data.append("public_id", `${process.env.CLOUDINARY_FOLDER ?? ""}/${publicId}`);
  data.append("timestamp", timestamp.toString());
  data.append("api_key", process.env.CLOUDINARY_API_KEY ?? "");
  data.append("signature", signature);

  const deleteFromCloudinaryResponse = await fetch(
    `${process.env.CLOUDINARY_URL}/destroy`,
    {
      method: "POST",
      body: data
    }
  );

  const res = await deleteFromCloudinaryResponse.json();

  return res;
};
