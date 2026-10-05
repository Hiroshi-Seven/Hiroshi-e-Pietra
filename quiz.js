export function calculatePercentage(score, total) {
  if (!total) return 0;
  return Math.round((score / total) * 100);
}

export function resultMessage(percentage) {
  if (percentage === 100) return "Perfeito! Você dominou este nível.";
  if (percentage >= 80) return "Excelente resultado!";
  if (percentage >= 60) return "Muito bom. Falta pouco para dominar o nível.";
  return "Revise a Wiki e tente novamente.";
}
