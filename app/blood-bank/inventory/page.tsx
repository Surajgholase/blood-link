import { ProtectedRoute } from "@/components/auth/protected-route"
import { BloodBankHeader } from "@/components/blood-bank/blood-bank-header"
import { InventoryManagement } from "@/components/blood-bank/inventory-management"
import { mockBloodBanks } from "@/lib/mock-data"

export default function BloodBankInventoryPage() {
  const bloodBank = mockBloodBanks[0]

  return (
    <ProtectedRoute allowedRoles={["blood_bank"]}>
      <div className="flex min-h-screen flex-col">
        <BloodBankHeader />
        <main className="flex-1 bg-secondary/20">
          <div className="container py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Inventory Management</h1>
              <p className="text-muted-foreground">Update and track blood stock levels</p>
            </div>

            <div className="max-w-3xl">
              <InventoryManagement inventory={bloodBank.inventory} />
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
