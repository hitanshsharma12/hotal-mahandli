type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({ eyebrow, title, description, center }: Props) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b35a]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="luxury-serif text-3xl font-semibold leading-tight text-[#fff7df] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/72 md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
