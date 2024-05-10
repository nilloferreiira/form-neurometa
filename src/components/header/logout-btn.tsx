'use client'

import { logout } from "@/hooks/logout"

export function LogoutBtn() {
    const { handleLogout } = logout();
    return (
        <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-400 font-semibold text-sm md:text-base"
          >
            Sair
          </button>
    )
}