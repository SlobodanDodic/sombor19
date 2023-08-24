import { getDictionary } from "@/lib/dictionary";
import Inputs from "../components/inputs";
import { Locale } from "@/i18n.config";

export default async function Contact({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);

  return (
    <div className="flex flex-col items-center pt-24 min-h-[100vh]">
      <div className="absolute top-0 left-0 w-screen h-36 py-7 text-white bg-stone-800 -z-10 border-b-2 border-amber-600 " />
      <h1 className="py-6 font-bold text-shadow shadow-stone-800 text-5xl text-amber-600">Contact</h1>
      <Inputs home={page.home} />
    </div>
  );
}
