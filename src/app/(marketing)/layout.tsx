import AppNavigation from "@/components/shared/app-navigation";
import Footer from "@/components/shared/footer";
import { PropsWithChildren } from "react";

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <AppNavigation />
      {children}
      <Footer />
    </main>
  );
}
