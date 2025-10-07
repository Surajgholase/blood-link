import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Heart, Building2, AlertCircle } from "lucide-react"

interface Activity {
  id: string
  type: "user_registered" | "donation" | "request" | "blood_bank_added"
  description: string
  timestamp: Date
  status?: string
}

interface RecentActivityProps {
  activities: Activity[]
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "user_registered":
        return <UserPlus className="h-4 w-4 text-blue-500" />
      case "donation":
        return <Heart className="h-4 w-4 text-red-500" />
      case "request":
        return <AlertCircle className="h-4 w-4 text-amber-500" />
      case "blood_bank_added":
        return <Building2 className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
    if (seconds < 60) return "Just now"
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest system events and actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
              <div className="mt-0.5">{getIcon(activity.type)}</div>
              <div className="flex-1">
                <p className="text-sm text-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{getTimeAgo(activity.timestamp)}</p>
              </div>
              {activity.status && (
                <Badge variant="outline" className="text-xs">
                  {activity.status}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
