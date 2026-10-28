import { useId } from "react";
import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
  variant?: "color" | "mono";
};

export function LogoMark({ className, variant = "color" }: MarkProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const g1 = `nex-g1-${uid}`;
  const g2 = `nex-g2-${uid}`;
  const mono = variant === "mono";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 504 504"
      role="img"
      aria-label="NEX101"
      className={cn("shrink-0", className)}
    >
      {!mono && (
        <defs>
          <linearGradient id={g1} gradientUnits="userSpaceOnUse" x1="71.895" y1="379.7231" x2="225.6941" y2="113.3352">
            <stop offset="0.2849" stopColor="#CE0054" />
            <stop offset="0.6425" stopColor="#4C0224" />
          </linearGradient>
          <linearGradient id={g2} gradientUnits="userSpaceOnUse" x1="432.937" y1="121.3742" x2="307.3556" y2="341.1416">
            <stop offset="0.3743" stopColor="#CE0054" />
            <stop offset="0.7542" stopColor="#4C0224" />
          </linearGradient>
        </defs>
      )}
      <path
        fill={mono ? "currentColor" : `url(#${g1})`}
        d="M116.3,405.36L57.09,302.81l100.19-173.49c8.67-15.03,24.21-24,41.54-24c17.33,0,32.87,8.97,41.54,24l17.66,30.59L116.3,405.36z M72.34,302.81l43.96,76.14l126.48-219.05l-13.85-23.99c-6.29-10.89-17.54-17.39-30.11-17.39c-12.57,0-23.82,6.5-30.11,17.39L72.34,302.81z"
      />
      <path
        fill={mono ? "currentColor" : `url(#${g2})`}
        d="M305.19,398.72c-17.33,0-32.87-8.97-41.54-24l-7.53-13.03c-6.09-11.26-5.91-24.94,0.4-35.83L387.76,98.64l59.15,102.5L346.73,374.73C338.06,389.75,322.53,398.72,305.19,398.72z M387.75,125.05l-119.8,207.42c-4.03,6.96-4.14,15.69-0.31,22.79l7.44,12.86c6.29,10.89,17.54,17.39,30.11,17.39c12.57,0,23.82-6.5,30.11-17.39l96.37-166.98L387.75,125.05z"
      />
      <path
        fill={mono ? "currentColor" : "#CE0054"}
        d="M399.14,281.72c-8.67,9.32-21.03,15.15-34.75,15.15c-16.55,0-31.11-8.48-39.58-21.34c-0.08-0.13-0.17-0.24-0.25-0.37l-0.11-0.2c-0.06-0.07-0.1-0.14-0.14-0.21c-0.28-0.44-0.54-0.88-0.81-1.33c-0.28-0.45-0.54-0.91-0.76-1.35c-0.16-0.3-0.31-0.59-0.47-0.89c-0.03-0.04-0.06-0.1-0.08-0.16l-82.02-142.04c-8.71-14.83-24.14-23.66-41.35-23.66c-17.33,0-32.87,8.96-41.55,23.99l-17.66,30.57v0.01l-39.66,68.68c1.47-2.25,3.13-4.36,4.96-6.33c8.65-9.29,20.99-15.09,34.68-15.09c16.07,0,30.27,8,38.83,20.23c0.1,0.13,0.18,0.25,0.28,0.38l0.69,1.02l0.06,0.08c0.75,1.12,1.43,2.24,2.04,3.37v0.17c0.03,0.06,0.06,0.1,0.08,0.16c0.03,0.06,0.06,0.1,0.08,0.16l2.66,4.59l79.34,137.41c8.67,15.02,24.2,24,41.53,24c17.35,0,32.87-8.98,41.55-24l17.66-30.59l0.03,0.06l40.5-70.14C403.24,276.81,401.3,279.37,399.14,281.72z"
      />
    </svg>
  );
}

type WordmarkProps = {
  appName?: string;
  className?: string;
};

export function LogoWordmark({ appName = "NEX101 Hub", className }: WordmarkProps) {
  const [first, ...rest] = appName.split(" ");
  const suffix = rest.join(" ");

  return (
    <span className={cn("inline-flex items-baseline gap-1.5 whitespace-nowrap", className)}>
      <span className="font-wordmark font-bold uppercase tracking-wider">{first}</span>
      {suffix && <span className="font-sans font-medium opacity-80">{suffix}</span>}
    </span>
  );
}

type LockupProps = {
  appName?: string;
  className?: string;
  markClassName?: string;
  variant?: "color" | "mono";
};

export function LogoLockup({ appName, className, markClassName, variant }: LockupProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className={cn("size-10", markClassName)} variant={variant} />
      <LogoWordmark appName={appName} className="text-2xl" />
    </span>
  );
}
