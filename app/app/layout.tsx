import AppHeader from "@/components/app/AppHeader";
import AppDock from "@/components/app/AppDock";
import { ThemeProvider } from "@/components/app/ThemeProvider";

export const metadata = {
  title: "PixelHive — Workspace",
};

const noFlashScript = `(function(){try{var t=localStorage.getItem('ph-theme')||'dark';if(t==='dark')document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      <div className="min-h-screen bg-[#FBF8EE] dark:bg-ph-black">
        <AppHeader />
        <main className="relative min-h-[calc(100vh-72px)] pb-[120px]">
          {/* Light-mode warm gradient */}
          <div
            className="pointer-events-none absolute inset-0 dark:hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,247,224,0.6) 0%, rgba(255,255,255,0) 60%)",
            }}
          />
          {/* Dark-mode subtle cyan glow */}
          <div
            className="pointer-events-none absolute inset-0 hidden dark:block"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(10,15,24,0.4) 0%, rgba(8,11,18,0.2) 35%, rgba(8,11,18,0) 70%), radial-gradient(900px 500px at 50% 0%, rgba(107,212,255,0.05) 0%, rgba(107,212,255,0) 60%)",
            }}
          />
          <div className="relative">{children}</div>
        </main>
        <AppDock />
      </div>
    </ThemeProvider>
  );
}
