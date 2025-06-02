import { Outlet } from "@remix-run/react";
import { Scaffold } from "@orderly.network/ui-scaffold";
import config from "@/utils/config";
import { useNav } from "@/hooks/useNav";

export default function PerpPage() {
  const { onRouteChange } = useNav();

  return (
    <Scaffold
      bottomNavProps={config.scaffold.bottomNavProps}
      mainNavProps={config.scaffold.mainNavProps}
      footerProps={config.scaffold.footerProps}
      routerAdapter={{
        onRouteChange,
        currentPath: "/",
      }}
    >
      <Outlet />
    </Scaffold>
  );
}
