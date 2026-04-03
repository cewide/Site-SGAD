import logo from "../assets/logo-sgad.png";

export function Logo({ size = 36, className = "" }) {
  return (
    <img
      src={logo}
      alt="SGAD"
      width={size}
      height={size}
      className={`shrink-0 select-none object-contain ${className}`}
      draggable={false}
      decoding="async"
    />
  );
}
