import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { BloodBank } from "@/lib/types"
import { MapPin, Phone, Clock } from "lucide-react"

interface NearbyBloodBanksProps {
  bloodBanks: BloodBank[]
}

export function NearbyBloodBanks({ bloodBanks }: NearbyBloodBanksProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nearby Blood Banks</CardTitle>
        <CardDescription>Find a convenient location to donate</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bloodBanks.map((bank) => (
            <div key={bank.id} className="flex flex-col gap-3 p-4 rounded-lg border border-border bg-card">
              <div>
                <h4 className="font-semibold text-foreground mb-2">{bank.name}</h4>
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
                  View Details
                </Button>
                <Button size="sm" className="flex-1">
                  Schedule Donation
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
