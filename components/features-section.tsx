import { Bell, Clock, Shield, Smartphone } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: "Real-Time Matching",
      description: "Instantly connect with compatible donors or recipients based on blood type and location.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get notified immediately when there's a match or when blood is urgently needed.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your medical information is protected with enterprise-grade security and HIPAA compliance.",
    },
    {
      icon: Smartphone,
      title: "Easy to Use",
      description: "Simple, intuitive interface designed for quick access during emergencies.",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            How Blood Link Works
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Blood Link makes blood donation simple, fast, and efficient for everyone involved.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
