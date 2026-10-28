import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { HelpCircle, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const SupportComponent = () => {
  const supportUrl =
    process.env.NEXT_PUBLIC_SUPPORT_URL ?? "https://support.nex101hub.com";

  if (!supportUrl) return null;

  return (
    <Popover>
      <PopoverTrigger className="border rounded-md p-3">
        <HelpCircle className="cursor-pointer w-4 h-4" />
      </PopoverTrigger>
      <PopoverContent
        className="flex flex-col space-y-2 mt-3 min-w-[300px]"
        align={"end"}
      >
        <div className="flex w-full justify-between items-center gap-2">
          <span className="text-sm">Need help? Contact support</span>
          <Button asChild variant={"secondary"}>
            <Link
              className="border rounded-md p-2"
              href={supportUrl}
              target="_blank"
              aria-label="Contact support"
            >
              <LifeBuoy className="size-4" />
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SupportComponent;
