import { useTranslations } from "next-intl";
import { Icons } from "@/components/icons";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  const t = useTranslations("navbar");

  const navItems = [
    {
      key: "home",
      icon: (
        <Icons.home className="size-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      key: "github",
      icon: (
        <Icons.github className="size-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      key: "linkedin",
      icon: (
        <Icons.linkedin className="size-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      key: "darkmode",
      icon: <ModeToggle ariaLabel={t.raw("darkmode").ariaLabel} />,
    },
  ].map(({ key, icon }) => {
    const item = t.raw(key);

    return {
      title: item.title,
      icon,
      ariaLabel: item.ariaLabel,
      href: item.href,
    };
  });

  return <FloatingDock items={navItems} />;
}
