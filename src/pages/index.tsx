import { Inter, Montserrat } from "next/font/google";
import { TodoWidget } from "@/todos";
import { ThemeTogglerWidget } from "@/theme";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${montserrat.className} min-h-screen min-w-full flex flex-col justify-start gap-2 px-2 py-4`}
    >
      <ThemeTogglerWidget />
      <TodoWidget />
    </main>
  );
}
