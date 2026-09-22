import brandIcon from "@/assets/brand-icon.png";

/** My_ZCode 品牌图标(替代原 ZCode 内联 Z 标志)。 */
export function ZCodeAboutLogo({ className }: { className?: string }) {
  return <img src={brandIcon} alt="" className={className} aria-hidden="true" />;
}
