import { useSocialLinks } from "@/hooks/useSocialLinks";

/**
 * Lista de redes sociales / contacto, sacada del mock src/data/social.json.
 * Se usa en el Footer y puede reutilizarse en el bloque de Contacto.
 */
export default function SocialLinks() {
  const social = useSocialLinks();

  return (
    <ul>
      {social.map((item) => (
        <li key={item.id}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
