import { ReactNode } from "react";
import Navigation from "../../components/site/navigation";

type Props = {};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full">
      <Navigation />
      {children}
    </main>
  );
};

export default Layout;
