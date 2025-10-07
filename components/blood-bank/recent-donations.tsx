import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

interface Donation {
  id: string
  donorName: string
  bloodType: string
  units: number
  date: Date
  status: "completed" | "pending" | "processing"
}

interface RecentDonationsProps {
  donations: Donation[]
}

export function RecentDonations({ donations }: RecentDonationsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500 text-white"
      case "processing":
        return "bg-blue-500 text-white"
      case "pending":
        return "bg-amber-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Donations</CardTitle>
        <CardDescription>Latest blood donations received</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {donations.map((donation) => (
            <div
              key={donation.id}
              className="flex items-center justify-between p-3 rounded-lg border border-border bg-card"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-foreground">{donation.donorName}</p>
                    <Badge variant="outline" className="font-mono text-xs">
                      {donation.bloodType}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(donation.date)}</span>
                    <span>•</span>
                    <span>
                      {donation.units} {donation.units === 1 ? "unit" : "units"}
                    </span>
                  </div>
                </div>
              </div>
              <Badge className={getStatusColor(donation.status)}>{donation.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
