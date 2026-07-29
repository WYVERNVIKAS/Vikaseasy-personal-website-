import { Github, Instagram, Send, Mail } from "lucide-react";

// Edit these links to point to your own profiles.
const socials = [
  { icon: Github, href: "https://github.com/your-username", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/your-username", label: "Instagram" },
  { icon: Send, href: "https://t.me/your-username", label: "Telegram" },
  { icon: Mail, href: "mailto:you@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-display text-lg font-bold tracking-widest text-white">
          V<span className="text-primary">B</span>
        </p>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-cursor-hover
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <div className="text-center text-xs text-white/40 md:text-right">
          <p>© 2026 VIKAS BANOTRA</p>
          <p>Made with ❤️ by VIKAS BANOTRA</p>
        </div>
      </div>
    </footer>
  );
}
