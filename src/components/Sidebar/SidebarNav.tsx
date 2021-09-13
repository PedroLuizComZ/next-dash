import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSession } from "./NavSession";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSession title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink href="/users" icon={RiContactsLine}>Usuarios</NavLink>
      </NavSession>

      <NavSession title="Automação">
        <NavLink href="/forms" icon={RiInputMethodLine}>Formularios</NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine}>Automação</NavLink>
      </NavSession>
    </Stack>
  );
}
