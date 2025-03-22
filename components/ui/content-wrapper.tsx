import { cn } from "@/lib/utils";

export default function ContentWrapper({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}