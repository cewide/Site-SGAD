import logo from "../assets/logo-sguad.png";

const DEFAULT_ALT =
  "Logotipo SGUAD — plataforma all-in-one de gestão empresarial pela A&F Softwares";

export function Logo({ size = 36, className = "", alt = DEFAULT_ALT }) {
  return (
    <img
      src={logo}
      alt={alt}
      width={size}
      height={size}
      className={`shrink-0 select-none object-contain ${className}`}
      draggable={false}
      decoding="async"
    />
  );
}
