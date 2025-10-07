import { ProtectedRoute } from "@/components/auth/protected-route"
import { BloodBankHeader } from "@/components/blood-bank/blood-bank-header"
import { StatsOverview } from "@/components/blood-bank/stats-overview"
import { InventoryOverview } from "@/components/blood-bank/inventory-overview"
import { RecentDonations } from "@/components/blood-bank/recent-donations"
import { PendingRequests } from "@/components/blood-bank/pending-requests"
import { mockBloodBanks, mockDonationRequests } from "@/lib/mock-data"

export default function BloodBankDashboardPage() {
  // Use first blood bank as example
  const bloodBank = mockBloodBanks[0]

  // Mock recent donations
  const recentDonations = [
    {
      id: "1",
      donorName: "John Smith",
      bloodType: "O+",
      units: 1,
      date: new Date(Date.now() - 2 * 60 * 60 * 1000),
      status: "completed" as const,
    },
    {
      id: "2",
      donorName: "Sarah Johnson",
      bloodType: "A+",
      units: 1,
      date: new Date(Date.now() - 5 * 60 * 60 * 1000),
      status: "processing" as const,
    },
    {
      id: "3",
      donorName: "Michael Chen",
      bloodType: "B-",
      units: 2,
      date: new Date(Date.now() - 8 * 60 * 60 * 1000),
      status: "completed" as const,
    },
    {
      id: "4",
      donorName: "Emily Davis",
      bloodType: "AB+",
      units: 1,
      date: new Date(Date.now() - 12 * 60 * 60 * 1000),
      status: "pending" as const,
    },
  ]

  // Filter open requests
  const pendingRequests = mockDonationRequests
    .filter((req) => req.status === "open")
    .map((req) => ({
      ...req,
      requestDate: new Date(req.requestDate),
    }))

  // Calculate critical stock (units < 10)
  const criticalStock = bloodBank.inventory.filter((inv) => inv.unitsAvailable < 10).length

  return (
    <ProtectedRoute allowedRoles={["blood_bank"]}>
      <div className="flex min-h-screen flex-col">
        <BloodBankHeader />
        <main className="flex-1 bg-secondary/20">
          <div className="container py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">{bloodBank.name}</h1>
              <p className="text-muted-foreground">Blood bank management dashboard</p>
            </div>

            <div className="space-y-6">
              <StatsOverview
                totalDonors={1247}
                totalDonations={89}
                pendingRequests={pendingRequests.length}
                criticalStock={criticalStock}
              />

              <InventoryOverview inventory={bloodBank.inventory} />

              <div className="grid gap-6 lg:grid-cols-2">
                <RecentDonations donations={recentDonations} />
                <PendingRequests requests={pendingRequests} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
