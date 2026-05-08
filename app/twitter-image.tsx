import { createSocialImage, socialImageSize } from "@/lib/create-social-image";

export const alt = "Diego Abad - desarrollador de software";

export const size = socialImageSize;

export const contentType = "image/png";

export default async function TwitterImage() {
  return createSocialImage();
}
