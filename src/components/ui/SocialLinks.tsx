const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M14.2 8.1h2.1V4.4c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.4 2-5.4 5.6V13H4.2v4.1h3.5v10.6H12V17.1h3.4l.5-4.1H12v-2.8c0-1.2.3-2.1 2.2-2.1Z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <path d="M16 9.3A6.7 6.7 0 1 0 16 22.7 6.7 6.7 0 0 0 16 9.3Zm0 11A4.3 4.3 0 1 1 16 11.7a4.3 4.3 0 0 1 0 8.6Z" />
        <path d="M23 8.9a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0Z" />
        <path d="M21.8 3.8H10.2a6.4 6.4 0 0 0-6.4 6.4v11.6a6.4 6.4 0 0 0 6.4 6.4h11.6a6.4 6.4 0 0 0 6.4-6.4V10.2a6.4 6.4 0 0 0-6.4-6.4Zm4 18a4 4 0 0 1-4 4H10.2a4 4 0 0 1-4-4V10.2a4 4 0 0 1 4-4h11.6a4 4 0 0 1 4 4v11.6Z" />
      </>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <path d="M18.7 13.8 27.2 4h-2l-7.4 8.5L11.9 4H5.1l8.9 12.8L5.1 27h2l7.8-9 6.3 9H28l-9.3-13.2Zm-2.8 3.2-.9-1.3L7.9 5.5H11l5.8 8.3.9 1.3 7.5 10.7h-3.1L15.9 17Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M8.4 11.5H4.7V27h3.7V11.5ZM6.5 4A2.2 2.2 0 1 0 6.5 8.4 2.2 2.2 0 0 0 6.5 4Zm21 13.9c0-4.1-2.2-6.7-5.7-6.7-2.6 0-3.8 1.4-4.4 2.4v-2.1h-3.7V27h3.7v-8.6c0-2.3 1-3.8 3-3.8s3.4 1.5 3.4 4V27h3.7v-9.1Z" />
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <path d="M22 9.1a7.1 7.1 0 0 1-4.2-1.4v11.6a7.2 7.2 0 1 1-6.2-7.1v4a3.3 3.3 0 1 0 2.2 3.1V4h4a7.1 7.1 0 0 0 4.2 4.8v.3Z" />
    ),
  },
];

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-white/30 hover:bg-white hover:text-black"
        >
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
          >
            {social.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}
