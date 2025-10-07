"use client"

import { useEffect, useState } from "react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { RecipientHeader } from "@/components/recipient/recipient-header"
import { RequestStatusCard } from "@/components/recipient/request-status-card"
import { AvailableBloodBanks } from "@/components/recipient/available-blood-banks"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockBloodBanks } from "@/lib/mock-data"
import { Plus, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function RecipientDashboardPage() {
  const [requests, setRequests] = useState<any[]>([])

  useEffect(() => {
    // Load requests from localStorage
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("blood_requests")
      if (stored) {
        setRequests(JSON.parse(stored))
      }
    }
  }, [])

  const activeRequests = requests.filter((r) => r.status === "open")
  const latestRequest = requests.length > 0 ? requests[requests.length - 1] : null

  return (
    <ProtectedRoute allowedRoles={["recipient"]}>
      <div className="flex min-h-screen flex-col">
        <RecipientHeader />
        <main className="flex-1 bg-secondary/20">
          <div className="container py-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Recipient Dashboard</h1>
                <p className="text-muted-foreground">Manage your blood requests and find available donors</p>
              </div>
              <Button asChild>
                <Link href="/recipient/request">
                  <Plus className="h-4 w-4 mr-2" />
                  New Request
                </Link>
              </Button>
            </div>

            {activeRequests.length === 0 && (
              <Card className="mb-6 border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    <CardTitle className="text-amber-900 dark:text-amber-100">No Active Requests</CardTitle>
                  </div>
                  <CardDescription className="text-amber-800 dark:text-amber-200">
                    You don't have any active blood requests. Create one to get matched with donors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <Link href="/recipient/request">Create Blood Request</Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-6 lg:grid-cols-2">
              <RequestStatusCard requests={requests} />
              <AvailableBloodBanks bloodBanks={mockBloodBanks} neededBloodType={latestRequest?.bloodType} />
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
