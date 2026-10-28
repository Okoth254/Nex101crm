import Link from "next/link";
import { version } from "@/package.json";

const Footer = () => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "NEX101 Hub";

  return (
    <footer className="flex flex-row h-8 justify-end items-center w-full text-xs text-muted-foreground p-5">
      <div className="hidden md:flex">
        <Link href="/">
          <span className="text-muted-foreground hover:text-foreground transition-colors">
            {appName} - v{version}
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
