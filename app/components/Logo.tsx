import Link from "next/link";

type LogoProps = {
  href?: string;
  className?: string;
  size?: "sm" | "md";
};

export default function Logo({ href = "/", className = "", size = "sm" }: LogoProps) {
  const isSm = size === "sm";
  const textSize = isSm ? "text-base sm:text-lg" : "text-xl sm:text-2xl";
  const iconSize = isSm ? "w-6 h-6 text-sm" : "w-8 h-8 text-base";

  const content = (
    <>
      <span className={`italic text-white ${textSize}`}>Donate</span>
      <span className={`font-bold text-primary ${textSize}`}>M</span>
      <span
        className={`inline-flex items-center justify-center rounded-full border-2 border-primary bg-primary/20 text-white font-bold shrink-0 ${iconSize}`}
        aria-hidden
      >
        $
      </span>
      <span className={`font-bold text-primary ${textSize}`}>NEY</span>
      <span className={`italic text-primary ${textSize}`}>Now</span>
    </>
  );

  const wrapperClass = `inline-flex items-center gap-0.5 sm:gap-1 font-sans tracking-tight ${className}`;

  if (href) {
    return (
      <Link href={href} className={wrapperClass}>
        {content}
      </Link>
    );
  }

  return <span className={wrapperClass}>{content}</span>;
}
