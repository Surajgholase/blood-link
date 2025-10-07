import { ProtectedRoute } from "@/components/auth/protected-route"
import { AdminHeader } from "@/components/admin/admin-header"
import { SystemStats } from "@/components/admin/system-stats"
import { RecentActivity } from "@/components/admin/recent-activity"
import { UserManagement } from "@/components/admin/user-management"
import { BloodBankOverview } from "@/components/admin/blood-bank-overview"
import { mockBloodBanks, mockDonationRequests } from "@/lib/mock-data"

export default function AdminDashboardPage() {
  // Mock data for admin dashboard
  const mockUsers = [
    {
      id: "1",
      name: "John Smith",
      email: "john@example.com",
      role: "donor",
      status: "active" as const,
      joinedDate: new Date("2024-01-15"),
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "recipient",
      status: "active" as const,
      joinedDate: new Date("2024-02-20"),
    },
    {
      id: "3",
      name: "Michael Chen",
      email: "michael@example.com",
      role: "donor",
      status: "active" as const,
      joinedDate: new Date("2024-03-10"),
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily@example.com",
      role: "blood_bank",
      status: "active" as const,
      joinedDate: new Date("2024-01-05"),
    },
  ]

  const mockActivities = [
    {
      id: "1",
      type: "user_registered" as const,
      description: "New donor registered: John Smith",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
    },
    {
      id: "2",
      type: "request" as const,
      description: "Critical blood request for O- in San Francisco",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      status: "urgent",
    },
    {
      id: "3",
      type: "donation" as const,
      description: "Blood donation completed at City General",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      status: "completed",
    },
    {
      id: "4",
      type: "blood_bank_added" as const,
      description: "New blood bank registered: Memorial Hospital",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    },
  ]

  const activeRequests = mockDonationRequests.filter((req) => req.status === "open")
  const criticalRequests = activeRequests.filter((req) => req.urgencyLevel === "critical")

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="flex min-h-screen flex-col">
        <AdminHeader />
        <main className="flex-1 bg-secondary/20">
          <div className="container py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">System overview and management</p>
            </div>

            <div className="space-y-6">
              <SystemStats
                totalUsers={mockUsers.length}
                totalDonors={mockUsers.filter((u) => u.role === "donor").length}
                totalRecipients={mockUsers.filter((u) => u.role === "recipient").length}
                totalBloodBanks={mockBloodBanks.length}
                activeRequests={activeRequests.length}
                criticalRequests={criticalRequests.length}
              />

              <div className="grid gap-6 lg:grid-cols-2">
                <RecentActivity activities={mockActivities} />
                <BloodBankOverview bloodBanks={mockBloodBanks} />
              </div>

              <UserManagement users={mockUsers} />
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
