import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>{children}</ClerkProvider>
  );
}
