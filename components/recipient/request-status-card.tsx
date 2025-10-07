import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Droplet, CheckCircle2, XCircle } from "lucide-react"

interface Request {
  id: string
  bloodType: string
  unitsNeeded: number
  urgencyLevel: string
  hospital: string
  city: string
  state: string
  requestDate: string
  status: string
  matchedDonors?: number
}

interface RequestStatusCardProps {
  requests: Request[]
}

export function RequestStatusCard({ requests }: RequestStatusCardProps) {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "fulfilled":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case "cancelled":
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <Clock className="h-5 w-5 text-amber-600" />
    }
  }

  const getTimeAgo = (date: string) => {
    const hours = Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60))
    if (hours < 1) return "Just now"
    if (hours === 1) return "1 hour ago"
    if (hours < 24) return `${hours} hours ago`
    const days = Math.floor(hours / 24)
    return days === 1 ? "1 day ago" : `${days} days ago`
  }

  return (
    <Card className="w-full">
      <CardHeader className="px-6">
        <CardTitle>Your Blood Requests</CardTitle>
        <CardDescription>Track the status of your blood donation requests</CardDescription>
      </CardHeader>
      <CardContent className="px-6">
        {requests.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Droplet className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p className="mb-4">You haven't made any blood requests yet</p>
            <Button asChild>
              <a href="/recipient/request">Create Request</a>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map((request) => (
              <div key={request.id} className="flex flex-col gap-4 p-4 rounded-lg border border-border bg-card shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className={getUrgencyColor(request.urgencyLevel)}>
                        {request.urgencyLevel.toUpperCase()}
                      </Badge>
                      <Badge variant="outline">{request.bloodType}</Badge>
                      <div className="flex items-center gap-1 ml-auto">
                        {getStatusIcon(request.status)}
                        <span className="text-sm font-medium capitalize">{request.status}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {request.unitsNeeded} {request.unitsNeeded === 1 ? "unit" : "units"} needed
                    </h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>
                          {request.hospital}, {request.city}, {request.state}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span>Requested {getTimeAgo(request.requestDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {request.status === "open" && (
                  <div className="flex gap-2 pt-3 border-t border-border">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="destructive" size="sm" className="flex-1">
                      Cancel Request
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
