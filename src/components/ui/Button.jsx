import { Children } from "react";

export default function Button({ children, theme, className, href }) {
  const baseClass = "text-white hover:text-white";
  const themeClasses =
    theme === "primary"
      ? "bg-p-3 hover:bg-p-2"
      : theme === "secondary"
      ? "bg-n-7 hover:bg-p-3"
      : "";

  const renderButton = () => (
    <button
      className={`button py-3 px-3 lg:py-4 lg:px-6 rounded-lg ${themeClasses} ${baseClass} ${className}`}
    >
      {children}
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      className={`buton inline-block py-3 px-3 lg:py-4 lg:px-6 rounded-lg no-underline ${themeClasses} ${baseClass} ${className}`}
    >
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
}
