import {
  IconHome,
  IconBrandGithub,
  IconBrandLinkedin,
  IconWorld,
  IconLayoutNavbarCollapse,
  IconMoonStars,
  IconSun,
  IconChevronRight,
  IconFileCvFilled,
  IconX,
  IconArrowLeft,
  IconArrowRight
} from "@tabler/icons-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  home: (props: IconProps) => <IconHome {...props} />,
  globe: (props: IconProps) => <IconWorld {...props} />,
  linkedin: (props: IconProps) => <IconBrandLinkedin {...props} />,
  github: (props: IconProps) => <IconBrandGithub {...props} />,
  navbarcollapse: (props: IconProps) => <IconLayoutNavbarCollapse {...props} />,
  moon: (props: IconProps) => <IconMoonStars {...props} />,
  sun: (props: IconProps) => <IconSun {...props} />,
  chevronright: (props: IconProps) => <IconChevronRight {...props} />,
  cv: (props: IconProps) => <IconFileCvFilled {...props} />,
  x: (props: IconProps) => <IconX {...props} />,
  arrowLeft: (props: IconProps) => <IconArrowLeft {...props} />,
  arrowRight: (props: IconProps) => <IconArrowRight {...props} />
} as const;
