import { Icons } from "@/components/icons";

export default interface ProjectExperience {
  title: string;
  href?: string;
  ariaLabel: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links?: readonly {
    icon: keyof typeof Icons;
    type: string;
    href?: string;
  }[];
  image?: string;
  video?: string;
  images?: string[];
}
