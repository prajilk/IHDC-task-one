import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

export function Profile({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Popover>
      <PopoverTrigger className={className}>{children}</PopoverTrigger>
      <PopoverContent className="w-60 p-3">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
            alt="Profile Picture"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h1 className="font-medium">Joseph Lazar</h1>
            <p className="text-xs text-muted-foreground">
              josephlazar@mail.com
            </p>
          </div>
        </div>
        <hr className="my-3" />
        <ul className="space-y-1">
          <li className="cursor-pointer rounded-md px-2 py-1 text-sm duration-300 hover:bg-gray-200 active:scale-95">
            Account
          </li>
          <li className="cursor-pointer rounded-md px-2 py-1 text-sm duration-300 hover:bg-gray-200 active:scale-95">
            Settings
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
