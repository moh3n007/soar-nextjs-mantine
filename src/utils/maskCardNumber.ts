export default function maskCardNumber(cardNumber: string) {
  const firstFour = cardNumber.slice(0, 4);
  const lastFour = cardNumber.slice(-4);
  const maskedSection = "**** ****";
  return `${firstFour} ${maskedSection} ${lastFour}`;
}
