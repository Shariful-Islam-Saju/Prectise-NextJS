import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
