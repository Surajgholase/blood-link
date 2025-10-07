import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            Ready to Make a Difference?
          </h2>
          <p className="mb-10 text-lg md:text-xl text-primary-foreground/90 text-pretty">
            Join thousands of donors and recipients who trust Blood Link to save lives every day. Your donation could be
            the difference between life and death.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <Link href="/register">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/blood-banks">Find Blood Banks</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
