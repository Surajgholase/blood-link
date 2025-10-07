import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { BloodBank, BloodType } from "@/lib/types"
import { MapPin, Phone, Clock } from "lucide-react"

interface AvailableBloodBanksProps {
  bloodBanks: BloodBank[]
  neededBloodType?: BloodType
}

export function AvailableBloodBanks({ bloodBanks, neededBloodType }: AvailableBloodBanksProps) {
  const getInventoryForType = (bank: BloodBank, bloodType?: BloodType) => {
    if (!bloodType) return null
    const inventory = bank.inventory.find((inv) => inv.bloodType === bloodType)
    return inventory?.unitsAvailable || 0
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nearby Blood Banks</CardTitle>
        <CardDescription>
          {neededBloodType ? `Blood banks with ${neededBloodType} available` : "Find blood banks in your area"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bloodBanks.map((bank) => {
            const availableUnits = neededBloodType ? getInventoryForType(bank, neededBloodType) : null
            return (
              <div key={bank.id} className="flex flex-col gap-3 p-4 rounded-lg border border-border bg-card">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">{bank.name}</h4>
                    {availableUnits !== null && (
                      <Badge variant={availableUnits > 0 ? "default" : "secondary"}>
                        {availableUnits} units available
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>
                        {bank.address}, {bank.city}, {bank.state} {bank.zipCode}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span>{bank.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 flex-shrink-0" />
                      <span>{bank.operatingHours}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    View Inventory
                  </Button>
                  <Button size="sm" className="flex-1">
                    Contact
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
