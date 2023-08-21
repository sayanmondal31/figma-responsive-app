import React from "react";

const sizeClasses = {
  txtPlusJakartaSansRomanMedium16: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold16: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanMedium14Blue700: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanMedium14: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanSemiBold32: "font-plusjakartasans font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
