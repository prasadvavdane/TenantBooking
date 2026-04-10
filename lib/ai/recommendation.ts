export function recommendRent(baseRent: number, areaDemandIndex: number, amenitiesScore: number) {
  const recommended = Math.round(baseRent * (1 + areaDemandIndex * 0.08 + amenitiesScore * 0.02));
  return Math.max(recommended, baseRent);
}

export function fraudRisk(title: string, imageHashMatches: number, duplicateAddressHits: number) {
  const keywordRisk = /(urgent|token now|wire transfer)/i.test(title) ? 0.3 : 0;
  return Math.min(1, keywordRisk + imageHashMatches * 0.2 + duplicateAddressHits * 0.25);
}
