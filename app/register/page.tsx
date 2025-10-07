import Link from "next/link"
import { RegisterForm } from "@/components/auth/register-form"
import { Droplet } from "lucide-react"
import { Suspense } from "react"

function RegisterContent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/20 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Droplet className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="text-2xl font-semibold text-foreground">Blood Link</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join our community of life-savers</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
          <RegisterForm />

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link href="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterContent />
    </Suspense>
  )
}
