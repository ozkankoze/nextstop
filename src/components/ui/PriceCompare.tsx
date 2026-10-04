export function euro(value: number) {
  return `€${value}`;
}

type PriceCompareProps = {
  regularPrice: number;
  nextStopPrice: number;
  /** `card` is the compact two-column block used on hostel cards. */
  size?: "card" | "detail";
  regularLabel?: string;
};

/** The regular-vs-NEXT STOP price comparison used across hostel surfaces. */
export function PriceCompare({
  regularPrice,
  nextStopPrice,
  size = "card",
  regularLabel = "Regular price",
}: PriceCompareProps) {
  const isDetail = size === "detail";
  const priceClass = isDetail
    ? "text-[26px] leading-none font-bold"
    : "text-[19px] leading-none font-bold";

  return (
    <div className="grid grid-cols-2 gap-3 border-t border-ink-100 pt-3.5">
      <div className="border-r border-ink-100 pr-3">
        <p className="text-[10.5px] text-ink-400">{regularLabel}</p>
        <p className={`mt-1 text-ink-900 ${priceClass}`}>{euro(regularPrice)}</p>
      </div>
      <div className="text-right">
        <p className="text-[10.5px] text-ink-400">Price with NEXT PASS</p>
        <p className={`mt-1 text-brand-500 ${priceClass}`}>
          {euro(nextStopPrice)}
        </p>
      </div>
    </div>
  );
}

export function SavingsBadge({
  regularPrice,
  nextStopPrice,
  className = "",
}: {
  regularPrice: number;
  nextStopPrice: number;
  className?: string;
}) {
  const amount = regularPrice - nextStopPrice;
  return (
    <p
      className={`inline-flex w-fit rounded-md bg-save-bg px-2 py-1 text-[10.5px] font-medium text-save ${className}`}
    >
      You save {euro(amount)}
    </p>
  );
}
