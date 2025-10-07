"use client"

import { useEffect } from "react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { DashboardHeader } from "@/components/donor/dashboard-header"
import { StatsCards } from "@/components/donor/stats-cards"
import { ActiveRequests } from "@/components/donor/active-requests"
import { NearbyBloodBanks } from "@/components/donor/nearby-blood-banks"
import { mockDonationRequests, mockBloodBanks, mockCurrentDonor } from "@/lib/mock-data"
import { initializeMockNotifications } from "@/lib/notifications"
import { getCurrentUser } from "@/lib/auth"

export default function DonorDashboardPage() {
  const user = getCurrentUser()

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      initializeMockNotifications(currentUser.id)
    }
  }, []) // Empty dependency array - only run once on mount

  // Calculate next eligible date (56 days after last donation)
  const nextEligibleDate = mockCurrentDonor.lastDonationDate
    ? new Date(mockCurrentDonor.lastDonationDate.getTime() + 56 * 24 * 60 * 60 * 1000)
    : undefined

  // Filter requests matching donor's blood type
  const matchingRequests = mockDonationRequests.filter(
    (req) => req.bloodType === mockCurrentDonor.bloodType && req.status === "open",
  )

  return (
    <ProtectedRoute allowedRoles={["donor"]}>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <main className="flex-1 bg-secondary/20">
          <div className="container py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {mockCurrentDonor.name}</h1>
              <p className="text-muted-foreground">Thank you for being a life-saver. Here's your donation overview.</p>
            </div>

            <div className="space-y-6">
              <StatsCards
                totalDonations={mockCurrentDonor.totalDonations}
                lastDonationDate={mockCurrentDonor.lastDonationDate}
                nextEligibleDate={nextEligibleDate}
                livesImpacted={mockCurrentDonor.totalDonations * 3}
              />

              <div className="grid gap-6 lg:grid-cols-2">
                <ActiveRequests requests={matchingRequests} />
                <NearbyBloodBanks bloodBanks={mockBloodBanks} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
