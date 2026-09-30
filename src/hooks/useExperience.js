import experienceData from "@/data/experience.json";

export function useExperience() {
  // Más reciente primero (YYYY-MM se puede comparar como string)
  return [...experienceData].sort((a, b) =>
    b.startDate.localeCompare(a.startDate)
  );
}