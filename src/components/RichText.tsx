import { Fragment, type ReactNode } from "react";

/** Renders **bold** and [label](/internal-or-https) inline markup. */
export function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1]) {
      nodes.push(
        <strong key={i++} className="font-semibold text-foreground">
          {m[1]}
        </strong>,
      );
    } else {
      const href = m[3];
      const cls = "font-medium text-gold underline underline-offset-4 hover:text-foreground";
      nodes.push(
        href.startsWith("/") ? (
          <a key={i++} href={href} className={cls}>
            {m[2]}
          </a>
        ) : (
          <a key={i++} href={href} target="_blank" rel="noreferrer" className={cls}>
            {m[2]}
          </a>
        ),
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes.map((n, k) => <Fragment key={k}>{n}</Fragment>)}</>;
}

/** Renders a body array: "### " subheadings, "- " list items (grouped), paragraphs. */
export function RichBody({ items }: { items: string[] }) {
  const out: ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (!list.length) return;
    out.push(
      <ul key={`ul-${out.length}`} className="list-disc space-y-2 pl-5 marker:text-gold">
        {list.map((li) => (
          <li key={li}>
            <InlineText text={li.slice(2)} />
          </li>
        ))}
      </ul>,
    );
    list = [];
  };
  items.forEach((item) => {
    if (item.startsWith("- ")) {
      list.push(item);
      return;
    }
    flush();
    if (item.startsWith("### ")) {
      out.push(
        <h3 key={item} className="pt-2 font-display text-xl text-foreground">
          {item.slice(4)}
        </h3>,
      );
    } else {
      out.push(
        <p key={item}>
          <InlineText text={item} />
        </p>,
      );
    }
  });
  flush();
  return <>{out}</>;
}
