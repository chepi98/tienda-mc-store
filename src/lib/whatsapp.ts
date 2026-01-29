import { brand } from "./constants";

export const getWhatsAppUrl = (city?: string) => {
  if (brand.whatsappUrl && brand.whatsappUrl.trim().length > 0) {
    return brand.whatsappUrl;
  }

  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = brand.whatsappMessage.replace(
    "[ciudad]",
    city ? city : "mi ciudad",
  );
  const encoded = encodeURIComponent(message);

  if (number && number.trim().length > 0) {
    return `https://wa.me/${number}?text=${encoded}`;
  }

  return `https://wa.me/?text=${encoded}`;
};
