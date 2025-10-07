import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BloodInventory } from "@/lib/types"
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"

interface InventoryOverviewProps {
  inventory: BloodInventory[]
}

export function InventoryOverview({ inventory }: InventoryOverviewProps) {
  const getStockStatus = (units: number) => {
    if (units < 10) return { status: "critical", color: "text-red-600", icon: AlertTriangle }
    if (units < 30) return { status: "low", color: "text-amber-600", icon: TrendingDown }
    return { status: "good", color: "text-green-600", icon: TrendingUp }
  }

  const totalUnits = inventory.reduce((sum, item) => sum + item.unitsAvailable, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Inventory</CardTitle>
        <CardDescription>Current stock levels by blood type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="text-3xl font-bold text-foreground">{totalUnits}</div>
          <p className="text-sm text-muted-foreground">Total units available</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {inventory.map((item) => {
            const stockStatus = getStockStatus(item.unitsAvailable)
            const StatusIcon = stockStatus.icon

            return (
              <div
                key={item.bloodType}
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-card"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="font-mono">
                      {item.bloodType}
                    </Badge>
                    <StatusIcon className={`h-4 w-4 ${stockStatus.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{item.unitsAvailable}</div>
                  <p className="text-xs text-muted-foreground capitalize">{stockStatus.status}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
