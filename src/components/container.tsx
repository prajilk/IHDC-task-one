import { cn } from "../lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto max-w-6xl px-2 lg:px-0", className)}>
      {children}
    </div>
  );
};

export default Container;
