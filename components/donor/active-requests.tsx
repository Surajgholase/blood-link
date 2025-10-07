import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { DonationRequest } from "@/lib/types"
import { AlertCircle, MapPin } from "lucide-react"

interface ActiveRequestsProps {
  requests: DonationRequest[]
}

export function ActiveRequests({ requests }: ActiveRequestsProps) {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "critical":
        return "bg-red-500 text-white"
      case "urgent":
        return "bg-amber-500 text-white"
      case "moderate":
        return "bg-blue-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getTimeAgo = (date: Date) => {
    const hours = Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60))
    if (hours < 1) return "Just now"
    if (hours === 1) return "1 hour ago"
    if (hours < 24) return `${hours} hours ago`
    const days = Math.floor(hours / 24)
    return days === 1 ? "1 day ago" : `${days} days ago`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Donation Requests</CardTitle>
        <CardDescription>Recipients near you who need your blood type</CardDescription>
      </CardHeader>
      <CardContent>
        {requests.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <AlertCircle className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No active requests matching your blood type at the moment</p>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map((request) => (
              <div
                key={request.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border bg-card"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getUrgencyColor(request.urgencyLevel)}>
                      {request.urgencyLevel.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">{request.bloodType}</Badge>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{request.recipientName}</h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                    <MapPin className="h-3 w-3" />
                    <span>
                      {request.hospital}, {request.city}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {request.unitsNeeded} {request.unitsNeeded === 1 ? "unit" : "units"} needed •{" "}
                    {getTimeAgo(request.requestDate)}
                  </p>
                </div>
                <Button>Respond</Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
