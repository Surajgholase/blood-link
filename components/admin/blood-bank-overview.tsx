import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { BloodBank } from "@/lib/types"
import { MapPin, Phone, TrendingUp, TrendingDown } from "lucide-react"

interface BloodBankOverviewProps {
  bloodBanks: BloodBank[]
}

export function BloodBankOverview({ bloodBanks }: BloodBankOverviewProps) {
  const getTotalInventory = (bank: BloodBank) => {
    return bank.inventory.reduce((sum, item) => sum + item.unitsAvailable, 0)
  }

  const getCriticalTypes = (bank: BloodBank) => {
    return bank.inventory.filter((item) => item.unitsAvailable < 10).length
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Bank Overview</CardTitle>
        <CardDescription>Monitor inventory across all facilities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bloodBanks.map((bank) => {
            const totalUnits = getTotalInventory(bank)
            const criticalTypes = getCriticalTypes(bank)

            return (
              <div key={bank.id} className="flex flex-col gap-3 p-4 rounded-lg border border-border bg-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{bank.name}</h4>
                      {criticalTypes > 0 && (
                        <Badge variant="destructive" className="text-xs">
                          {criticalTypes} critical
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>
                          {bank.city}, {bank.state}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        <span>{bank.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {totalUnits > 200 ? (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-amber-600" />
                      )}
                      <span className="text-2xl font-bold text-foreground">{totalUnits}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">total units</p>
                  </div>
                </div>
                <div className="flex gap-2 pt-2 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    View Inventory
                  </Button>
                  <Button size="sm" className="flex-1">
                    Manage
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
