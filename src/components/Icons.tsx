type P = { size?: number };

export const Arrow = ({ size = 18 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = ({ size = 18 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const Out = ({ size = 18 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const Down = ({ size = 18 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 4v13M6 11l6 6 6-6M5 20h14" />
  </svg>
);

export const Chevron = ({ size = 20 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const Close = ({ size = 20 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Check = ({ size = 18 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const LinkedIn = ({ size = 22 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM10 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21H10z" />
  </svg>
);

export const WhatsApp = ({ size = 22 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.13-1.35A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.04.8.81-2.96-.2-.3a8.2 8.2 0 1 1 6.91 3.8zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.23.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.54.13.16 1.74 2.65 4.2 3.72 1.56.67 2.17.73 2.95.61.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.1-.22-.17-.47-.29z" />
  </svg>
);

export const Mail = ({ size = 22 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const Phone = ({ size = 22 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const GitHub = ({ size = 22 }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.3-.52-1.47.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

const art: Record<string, React.ReactNode> = {
  time: (
    <>
      <circle cx="32" cy="34" r="22" />
      <path d="M32 20v14l9 6M26 6h12M32 6v6" />
    </>
  ),
  team: (
    <>
      <circle cx="22" cy="22" r="8" />
      <circle cx="44" cy="22" r="8" />
      <path d="M8 52c0-9 6-15 14-15s14 6 14 15M30 52c0-9 6-15 14-15s12 6 12 15" />
    </>
  ),
  project: (
    <>
      <rect x="8" y="10" width="48" height="44" rx="6" />
      <path d="M8 22h48M18 32h16M24 40h20M30 48h12" />
    </>
  ),
  talk: (
    <>
      <path d="M8 14a6 6 0 0 1 6-6h26a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H22l-10 8v-8a6 6 0 0 1-4-6z" />
      <path d="M26 40h12l10 8v-8a6 6 0 0 0 6-6V24" />
    </>
  ),
  solve: (
    <>
      <path d="M10 26h10a6 6 0 1 1 12 0h10v12a6 6 0 1 0 0 12v6H10V44a6 6 0 1 1 0-12z" />
    </>
  ),
  detail: (
    <>
      <circle cx="27" cy="27" r="17" />
      <path d="M40 40l14 14M20 27h14M27 20v14" />
    </>
  ),
  adapt: (
    <>
      <path d="M50 22A20 20 0 0 0 14 18M14 8v10h10M14 42a20 20 0 0 0 36 4M50 56V46H40" />
    </>
  ),
  client: (
    <>
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="13" />
      <circle cx="32" cy="32" r="4" />
      <path d="M32 2v8M32 54v8M2 32h8M54 32h8" />
    </>
  ),
};

export const WorkIcon = ({ name, className }: { name: string; className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {art[name]}
  </svg>
);
