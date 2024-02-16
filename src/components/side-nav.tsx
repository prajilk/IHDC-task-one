import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

export function SideNav({ className }: { className?: string }) {
  return (
    <Sheet>
      <SheetTrigger className={className}>
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="text-left font-semibold">
            XYZ SYSTEMS LLP
          </SheetTitle>
        </SheetHeader>
        <ul className="my-5 space-y-3">
          <li className="cursor-pointer font-medium duration-300 hover:text-blue-400 active:scale-95">
            Home
          </li>
          <li className="cursor-pointer font-medium duration-300 hover:text-blue-400 active:scale-95">
            Dashboard
          </li>
          <li className="cursor-pointer font-medium duration-300 hover:text-blue-400 active:scale-95">
            Products
          </li>
          <li className="cursor-pointer font-medium duration-300 hover:text-blue-400 active:scale-95">
            Transactions
          </li>
          <li className="cursor-pointer font-medium duration-300 hover:text-blue-400 active:scale-95">
            Journal
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
