export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h1 className="display text-4xl leading-tight font-semibold text-[#173c32] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#6f7066]">
        {description}
      </p>
    </div>
  );
}
