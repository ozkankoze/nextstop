"use client";

import Image from "next/image";
import { useState } from "react";

export function HostelGallery({
  images,
  alt,
  name,
}: {
  images: string[];
  alt: string;
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="photo-fallback relative aspect-16/9 overflow-hidden rounded-xl">
        <Image
          src={images[active]}
          alt={`${name} — photo ${active + 1} of ${images.length}. ${alt}`}
          fill
          priority
          sizes="(min-width: 1024px) 760px, 100vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 ? (
        <ul className="mt-3 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <li key={image + index}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show photo ${index + 1} of ${images.length}`}
                aria-current={index === active}
                className={`photo-fallback relative block aspect-4/3 w-full overflow-hidden rounded-lg transition-opacity ${
                  index === active
                    ? "ring-2 ring-brand-500 ring-offset-2 ring-offset-canvas"
                    : "opacity-75 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
