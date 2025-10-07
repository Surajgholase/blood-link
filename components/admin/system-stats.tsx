import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building2, Heart } from "lucide-react"

interface SystemStatsProps {
  totalUsers: number
  totalDonors: number
  totalRecipients: number
  totalBloodBanks: number
  activeRequests: number
  criticalRequests: number
}

export function SystemStats({
  totalUsers,
  totalDonors,
  totalRecipients,
  totalBloodBanks,
  activeRequests,
  criticalRequests,
}: SystemStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalUsers}</div>
          <p className="text-xs text-muted-foreground">
            {totalDonors} donors, {totalRecipients} recipients
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Blood Banks</CardTitle>
          <Building2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalBloodBanks}</div>
          <p className="text-xs text-muted-foreground">Registered facilities</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Requests</CardTitle>
          <Heart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeRequests}</div>
          <p className="text-xs text-muted-foreground">{criticalRequests} critical</p>
        </CardContent>
      </Card>
    </div>
  )
}
