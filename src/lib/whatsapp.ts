type BookingData = {
  name: string;
  people: string;
  mobile: string;
  aadhaar: string;
  checkIn: string;
  checkOut: string;
  message: string;
};

export function buildWhatsAppLink(data: BookingData) {
  const lines = [
    "Hello, I want to book Mehandli Home Stay.",
    "",
    `Name: ${data.name}`,
    `Mobile: ${data.mobile}`,
    `People: ${data.people}`,
    `Aadhaar: ${data.aadhaar}`,
    `Check-in: ${data.checkIn}`,
    `Check-out: ${data.checkOut}`,
    `Message: ${data.message || "N/A"}`,
  ];

  return `https://wa.me/917018796714?text=${encodeURIComponent(lines.join("\n"))}`;
}
