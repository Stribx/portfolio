import fr from "@/messages/fr.json";
import { Icons } from "@/components/icons";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const t = fr.navbar;

  const navItems = [
    {
      key: "home",
      icon: <Icons.home className="size-full" />,
    },
    {
      key: "github",
      icon: <Icons.github className="size-full" />,
    },
    {
      key: "linkedin",
      icon: <Icons.linkedin className="size-full" />,
    },
    {
      key: "cv",
      icon: <Icons.cv className="size-full" />,
    },
    {
      key: "darkmode",
      icon: <ModeToggle ariaLabel={t.darkmode.ariaLabel} />,
    },
  ].map(({ key, icon }) => {
    const item = t[key as keyof typeof t];

    return {
      title: item.title,
      icon,
      ariaLabel: item.ariaLabel,
      href: "href" in item ? item.href : undefined,
    };
  });

  return <FloatingDock items={navItems} />;
}
