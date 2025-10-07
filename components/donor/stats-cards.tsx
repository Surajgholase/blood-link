import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Calendar, Award, Clock } from "lucide-react"

interface StatsCardsProps {
  totalDonations: number
  lastDonationDate?: Date
  nextEligibleDate?: Date
  livesImpacted: number
}

export function StatsCards({ totalDonations, lastDonationDate, nextEligibleDate, livesImpacted }: StatsCardsProps) {
  const formatDate = (date?: Date) => {
    if (!date) return "Never"
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const isEligible = nextEligibleDate ? new Date() >= new Date(nextEligibleDate) : true

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
          <Heart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalDonations}</div>
          <p className="text-xs text-muted-foreground">Lifetime contributions</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Last Donation</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatDate(lastDonationDate)}</div>
          <p className="text-xs text-muted-foreground">Most recent donation</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Eligibility Status</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${isEligible ? "text-green-600" : "text-amber-600"}`}>
            {isEligible ? "Eligible" : "Pending"}
          </div>
          <p className="text-xs text-muted-foreground">
            {isEligible ? "Ready to donate" : `Available ${formatDate(nextEligibleDate)}`}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Lives Impacted</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{livesImpacted}</div>
          <p className="text-xs text-muted-foreground">People helped</p>
        </CardContent>
      </Card>
    </div>
  )
}
