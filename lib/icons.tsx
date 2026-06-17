import * as React from "react";

/* ============================================================
   Inline SVG icons — exact paths lifted from the design source.
   InlineIcon renders raw inner markup so data-driven sections can
   carry their own paths; named components cover the shared chrome.
   ============================================================ */

export type IconProps = {
  size?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
  className?: string;
  title?: string;
};

type InlineIconProps = IconProps & {
  inner: string;
  variant?: "stroke" | "fill";
  viewBox?: string;
};

export function InlineIcon({
  size = 18,
  strokeWidth = 2,
  inner,
  variant = "stroke",
  viewBox = "0 0 24 24",
  style,
  className,
}: InlineIconProps) {
  const base = {
    width: size,
    height: size,
    viewBox,
    "aria-hidden": true,
    focusable: false as const,
    style,
    className,
    dangerouslySetInnerHTML: { __html: inner },
  };
  if (variant === "fill") {
    return <svg {...base} fill="currentColor" />;
  }
  return (
    <svg
      {...base}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

const stroke =
  (inner: string, defaultSize = 18) =>
  ({ size = defaultSize, strokeWidth = 2, style, className }: IconProps) =>
    (
      <InlineIcon
        inner={inner}
        variant="stroke"
        size={size}
        strokeWidth={strokeWidth}
        style={style}
        className={className}
      />
    );

const fill =
  (inner: string, defaultSize = 18, viewBox = "0 0 24 24") =>
  ({ size = defaultSize, style, className }: IconProps) =>
    (
      <InlineIcon
        inner={inner}
        variant="fill"
        size={size}
        viewBox={viewBox}
        style={style}
        className={className}
      />
    );

/* ---- chrome / navigation ---- */
export const HomeIcon = fill('<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>');
export const WorkIcon = stroke(
  '<rect x="2.5" y="6.5" width="19" height="13" rx="2"/><path d="M8 6.5V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5"/>',
  17
);
export const ProjectsIcon = stroke(
  '<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>',
  17
);
export const ToolsIcon = stroke(
  '<path d="M14.5 5.5a3.5 3.5 0 0 0-5 4.7L3 16.7 7.3 21l6.5-6.5a3.5 3.5 0 0 0 4.7-5l-2.8 2.8-2-2 2.8-2.8Z"/>',
  17
);
export const MailIcon = stroke(
  '<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3.5 6 8.5 6 8.5-6"/>',
  17
);
export const SunIcon = stroke(
  '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.2M12 19.8V22M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2 12h2.2M19.8 12H22M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"/>'
);
export const MoonIcon = stroke('<path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z"/>');

/* ---- arrows / chevrons ---- */
export const ArrowRightIcon = stroke('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>', 16);
export const ArrowUpRightIcon = stroke('<path d="M7 17 17 7M9 7h8v8"/>', 16);
export const ChevronDownIcon = stroke('<path d="m6 9 6 6 6-6"/>', 18);
export const ChevronLeftIcon = stroke('<path d="m15 6-6 6 6 6"/>', 19);
export const ChevronRightIcon = stroke('<path d="m9 6 6 6-6 6"/>', 19);
export const ExternalLinkIcon = stroke(
  '<path d="M15 3h6v6M21 3l-9 9M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/>',
  16
);

/* ---- glyphs ---- */
export const CheckIcon = stroke('<path d="M20 6 9 17l-5-5"/>', 14);
export const DownloadIcon = stroke(
  '<path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  16
);
export const EyeIcon = stroke(
  '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  15
);
export const GlobeIcon = stroke(
  '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.6 2.8 4 6 4 9.5s-1.4 6.7-4 9.5c-2.6-2.8-4-6-4-9.5s1.4-6.7 4-9.5Z"/>',
  13
);
export const InfoIcon = stroke('<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>', 13);
export const LockIcon = stroke(
  '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  13
);
export const SendIcon = stroke('<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/>', 16);
export const MonitorIcon = stroke(
  '<rect x="2.5" y="4" width="19" height="14" rx="2.5"/><path d="M8 21h8M12 18v3"/>',
  14
);
export const AwardIcon = stroke(
  '<circle cx="12" cy="9" r="6"/><path d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8"/>',
  13
);
export const SparkleIcon = fill(
  '<path d="M12 2 9.2 9.2 2 12l7.2 2.8L12 22l2.8-7.2L22 12l-7.2-2.8L12 2Z"/>',
  15
);

/* ---- brand marks ---- */
export const GithubMark = fill(
  '<path d="M12 1.5A10.5 10.5 0 0 0 8.7 22c.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.8 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.7 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5Z"/>',
  13
);
export const LinkedInMark = fill(
  '<path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.3 18.3H5.5V9.7h2.8v8.6ZM6.9 8.5a1.6 1.6 0 1 1 0-3.3 1.6 1.6 0 0 1 0 3.3Zm11.4 9.8h-2.8v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3H9.7V9.7h2.7v1.2h.05a3 3 0 0 1 2.7-1.5c2.9 0 3.4 1.9 3.4 4.3v4.6Z"/>',
  19
);

const ANTHROPIC_PATH =
  '<path fill-rule="nonzero" d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"/>';

export function ClaudeMark({ size = 18, style, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      focusable={false}
      fill="#D97757"
      style={style}
      className={className}
      dangerouslySetInnerHTML={{ __html: ANTHROPIC_PATH }}
    />
  );
}

/* X (Twitter) — multicolor mark used in the bottom dock */
export function XMark({ size = 28, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden focusable={false} style={style} className={className}>
      <path d="M38,42h-28c-2.209,0-4-1.791-4-4v-28c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4z" fill="#1d1d1f" />
      <path d="M34.257,34h-6.437l-13.991,-20h6.437zM28.587,32.304h2.563l-11.651,-16.608h-2.563z" fill="#fff" />
      <path d="M15.866,34l7.203,-8.344l-0.942,-1.249l-8.304,9.593z" fill="#fff" />
      <path d="M24.45,21.721l0.905,1.289l7.781,-9.01h-2z" fill="#fff" />
    </svg>
  );
}

/* LinkedIn — multicolor mark used in the bottom dock */
export function LinkedInColorMark({ size = 28, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden focusable={false} style={style} className={className}>
      <path d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" fill="#0288D1" />
      <path d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z" fill="#FFF" />
    </svg>
  );
}
