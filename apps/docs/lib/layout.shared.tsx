import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-bold tracking-wide">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/nex101-mark.svg" alt="" width={24} height={24} />
          {appName}
        </span>
      ),
    },
  };
}
