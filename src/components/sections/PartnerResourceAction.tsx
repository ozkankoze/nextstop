"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Misc";
import { DownloadIcon } from "@/components/ui/Icons";

/**
 * The only interactive part of a resource card. Downloads are not wired up in
 * this preview build, so the button explains that rather than serving a file.
 */
export function PartnerResourceAction({
  title,
  status,
}: {
  title: string;
  status: "available" | "coming-soon";
}) {
  const uid = useId();
  const noteId = `${uid}-note`;
  const [showNote, setShowNote] = useState(false);

  if (status === "coming-soon") {
    return (
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled
          aria-disabled
          aria-label={`${title} — not available yet`}
        >
          <DownloadIcon aria-hidden className="h-3.5 w-3.5" />
          Download
        </Button>
        <Badge tone="muted">Coming soon</Badge>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <Button
        type="button"
        variant="dark"
        size="sm"
        onClick={() => setShowNote(true)}
        aria-expanded={showNote}
        aria-controls={noteId}
        aria-label={`Download ${title}`}
      >
        <DownloadIcon aria-hidden className="h-3.5 w-3.5" />
        Download
      </Button>

      {showNote ? (
        <p
          id={noteId}
          role="status"
          className="mt-3 rounded-lg border border-ink-100 bg-ink-50 px-3 py-2.5 text-[11.5px] leading-relaxed text-ink-500"
        >
          Downloads open once you have a partner account. Apply as a founding
          partner and the files arrive with your welcome email.
        </p>
      ) : null}
    </div>
  );
}
