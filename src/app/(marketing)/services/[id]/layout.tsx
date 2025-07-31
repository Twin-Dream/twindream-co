import { PropsWithChildren } from "react";

export default function ServiceLayout({ children }: PropsWithChildren) {
  return <main className="py-24 max-w-7xl mx-auto">{children}</main>;
}
