export default interface WorkExperience {
  company: string;
  logoUrl: string;
  title: string;
  href: string;
  badges: string[];
  start: string;
  end?: string | null;
  description: string;
}
