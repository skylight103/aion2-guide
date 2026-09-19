export function GuideShot({
  src,
  alt,
  kicker,
  variant = "wide",
}: {
  src: string;
  alt: string;
  kicker?: string;
  variant?: "wide" | "tall" | "contain" | "inline" | "portrait";
}) {
  const cls =
    variant === "tall"
      ? "guide-shot guide-shot--tall"
      : variant === "contain"
          ? "guide-shot guide-shot--contain"
        : variant === "inline"
          ? "guide-shot guide-shot--inline"
          : variant === "portrait"
            ? "guide-shot guide-shot--portrait"
            : "guide-shot";
  return (
    <figure className="my-6">
      {kicker ? <p className="guide-kicker">{kicker}</p> : null}
      <div className={cls}>
        <img src={src} alt={alt} />
      </div>
    </figure>
  );
}
