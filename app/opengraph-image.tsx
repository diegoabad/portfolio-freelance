import { createSocialImage, DEFAULT_SOCIAL_IMAGE_ALT, socialImageSize } from "@/lib/create-social-image";

export const alt = DEFAULT_SOCIAL_IMAGE_ALT;

export const size = socialImageSize;

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return createSocialImage();
}
