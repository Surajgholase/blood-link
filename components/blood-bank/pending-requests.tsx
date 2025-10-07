import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock } from "lucide-react"

interface Request {
  id: string
  recipientName: string
  bloodType: string
  unitsNeeded: number
  urgencyLevel: string
  hospital: string
  requestDate: Date
}

interface PendingRequestsProps {
  requests: Request[]
}

export function PendingRequests({ requests }: PendingRequestsProps) {
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
        <CardTitle>Pending Requests</CardTitle>
        <CardDescription>Blood requests awaiting fulfillment</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {requests.map((request) => (
            <div key={request.id} className="flex flex-col gap-3 p-4 rounded-lg border border-border bg-card">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getUrgencyColor(request.urgencyLevel)}>
                      {request.urgencyLevel.toUpperCase()}
                    </Badge>
                    <Badge variant="outline" className="font-mono">
                      {request.bloodType}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{request.recipientName}</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{request.hospital}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{getTimeAgo(request.requestDate)}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{request.unitsNeeded}</div>
                  <p className="text-xs text-muted-foreground">units</p>
                </div>
              </div>
              <div className="flex gap-2 pt-2 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  View Details
                </Button>
                <Button size="sm" className="flex-1">
                  Fulfill Request
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
