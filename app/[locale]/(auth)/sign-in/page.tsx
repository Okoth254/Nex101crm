import { LogoMark, LogoWordmark } from "@/components/brand/Logo";
import { LoginComponent } from "./components/LoginComponent";

const SignInPage = async () => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "NEX101 Hub";

  return (
    <div className="h-full">
      <div className="flex flex-col items-center gap-4 py-10">
        <LogoMark className="size-20" />
        <h1 className="font-display scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to <LogoWordmark appName={appName} />
        </h1>
        <div className="h-1 w-24 rounded-full" style={{ background: "var(--brand-gradient)" }} />
      </div>
      <div>
        <LoginComponent />
      </div>
    </div>
  );
};

export default SignInPage;
