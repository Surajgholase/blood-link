import { DonorProfileForm } from "@/components/donor/donor-profile-form"
import { Droplet } from "lucide-react"
import Link from "next/link"

export default function DonorSetupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/20 px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Droplet className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="text-2xl font-semibold text-foreground">Blood Link</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Complete Your Donor Profile</h1>
          <p className="text-muted-foreground">Help us match you with recipients who need your blood type</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
          <DonorProfileForm />
        </div>
      </div>
    </div>
  )
}
