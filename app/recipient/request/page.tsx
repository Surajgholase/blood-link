import { ProtectedRoute } from "@/components/auth/protected-route"
import { BloodRequestForm } from "@/components/recipient/blood-request-form"
import { Droplet, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RecipientRequestPage() {
  return (
    <ProtectedRoute allowedRoles={["recipient"]}>
      <div className="flex min-h-screen items-center justify-center bg-secondary/20 px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <Link href="/recipient/dashboard">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Droplet className="h-7 w-7 text-primary-foreground" />
                </div>
                <span className="text-2xl font-semibold text-foreground">Blood Link</span>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Request Blood</h1>
              <p className="text-muted-foreground">
                Fill out the form below and we'll connect you with compatible donors
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
            <BloodRequestForm />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
