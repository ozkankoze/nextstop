import Link from "next/link";

/**
 * Renders a sentence from `src/data` and turns one phrase inside it into a
 * link, so the copy itself stays a plain string in the data layer.
 */
export function TextWithLink({
  text,
  link,
  linkClassName = "font-semibold underline underline-offset-2",
}: {
  text: string;
  link?: { text: string; href: string };
  linkClassName?: string;
}) {
  if (!link) return <>{text}</>;

  const start = text.indexOf(link.text);
  if (start === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, start)}
      <Link href={link.href} className={linkClassName}>
        {link.text}
      </Link>
      {text.slice(start + link.text.length)}
    </>
  );
}
