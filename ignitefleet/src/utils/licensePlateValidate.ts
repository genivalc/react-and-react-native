const licensePlateRegex = /^[A-Z]{3}\d{2}[A-Z0-9]$/;

/**
 * Valida uma placa de carro.
 * @param {string} licensePlate - A placa de carro a ser validada.
 * @returns {boolean} - True se a placa for válida, false caso contrário.
 */
export function licensePlateValidate(licensePlate: string): boolean {
  const license = licensePlate.toUpperCase();
  const isValid = license.match(licensePlateRegex);
  return isValid !== null;
}
