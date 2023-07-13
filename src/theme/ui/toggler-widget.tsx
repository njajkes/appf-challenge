import dynamic from "next/dynamic";

// Client-only component
const ClientToggler = dynamic(
  () => import("./toggler").then((v) => v.Toggler),
  { ssr: false, loading: () => <button>white</button> }
);

export const ThemeTogglerWidget = () => {
  return (
    <div className="flex flex-row justify-end">
      <ClientToggler />
    </div>
  );
};
