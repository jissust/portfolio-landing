import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Layout base de toda la app: Navbar fijo + contenido de la página + Footer.
 * Todas las páginas (Home, Test, y las que se agreguen a futuro) se renderizan
 * dentro de <main>, vía <Outlet /> del router.
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[var(--navbar-height)]">{children}</main>
      <Footer />
    </div>
  );
}
