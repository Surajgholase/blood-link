import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
            <Heart className="h-4 w-4 text-primary" />
            <span>Connecting Lives Through Blood Donation</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Every Drop Counts.
            <br />
            <span className="text-primary">Save Lives Today.</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground md:text-xl text-pretty max-w-2xl mx-auto">
            Blood Link connects blood donors with recipients in real-time, ensuring that life-saving blood reaches those
            who need it most, when they need it most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/register?role=donor">
                Become a Donor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="/register?role=recipient">Request Blood</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">15,000+ Donors</h3>
            <p className="text-muted-foreground">Registered donors ready to help</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">8,500+ Lives Saved</h3>
            <p className="text-muted-foreground">Successful blood donations</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">250+ Blood Banks</h3>
            <p className="text-muted-foreground">Connected facilities nationwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}
