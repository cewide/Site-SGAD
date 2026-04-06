export function ModuleImage({ png, webp, alt, className, loading = "lazy", ...rest }) {
  return (
    <picture>
      {webp ? <source srcSet={webp} type="image/webp" /> : null}
      <img src={png} alt={alt} loading={loading} className={className} decoding="async" {...rest} />
    </picture>
  );
}
