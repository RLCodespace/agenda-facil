import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PainelShell } from "@/components/painel/PainelShell";

export const metadata: Metadata = {
  title: "Painel",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
};

export default function PainelLayout({ children }: { children: ReactNode }) {
  return <PainelShell>{children}</PainelShell>;
}
