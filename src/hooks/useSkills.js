import skillsData from "@/data/skills.json";

/**
 * Hook de acceso a los skills mockeados.
 * El día de mañana esto se puede reemplazar por un fetch a una API
 * sin tener que tocar los componentes que lo consumen.
 */
export function useSkills() {
  // Filtra categorías vacías por si dejás alguna en construcción
  return skillsData.filter((category) => category.skills.length > 0);
}
