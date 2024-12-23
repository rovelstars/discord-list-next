export default function getBannerURL({ banner, id }: {
  banner?: string;
  id: string;
}) {
  if (!banner) return null;
  return `https://cdn.discordapp.com/banners/${id}/${banner}.${banner.startsWith("a_") ? "gif" : "webp"}?size=4096`;
}