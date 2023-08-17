import { Locale } from "@/i18n.config";

// Layout
export interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

// IntroSectionProps
export interface IntroSectionProps {
  home: {
    headline: string;
    title: string;
    visit: string;
    welcome: string;
  };
}