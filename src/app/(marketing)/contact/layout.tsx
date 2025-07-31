import { PropsWithChildren } from "react";

export default function ContactLayout({ children }: PropsWithChildren) {
  return <main className="py-24 max-w-7xl mx-auto">{children}</main>;
}
