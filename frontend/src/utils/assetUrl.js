/**
 * Пути к файлам из public/ с учётом import.meta.env.BASE_URL
 * (нужно для GitHub Pages: /repo/..., а не /... с корня домена).
 */
export function assetUrl(path) {
  const rel = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${rel}`;
}
