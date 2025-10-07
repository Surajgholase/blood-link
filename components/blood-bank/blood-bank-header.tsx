"use client"

import { Button } from "@/components/ui/button"
import { Droplet, LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { logout, getCurrentUser } from "@/lib/auth"
import { NotificationBell } from "@/components/notifications/notification-bell"

export function BloodBankHeader() {
  const router = useRouter()
  const user = getCurrentUser()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/blood-bank/dashboard" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Droplet className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">Blood-Link</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/blood-bank/dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/blood-bank/inventory"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Inventory
          </Link>
          <Link
            href="/blood-bank/requests"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Requests
          </Link>
          <Link
            href="/blood-bank/donors"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Donors
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden sm:inline">{user?.name}</span>
          <NotificationBell />
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
