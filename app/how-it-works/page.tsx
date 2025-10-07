import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Clock, Bell, Shield, Smartphone } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                How Blood Link Works
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Our platform makes blood donation simple, fast, and efficient
                for everyone involved.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Real-Time Matching</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Instantly connect with compatible donors or recipients based
                    on blood type and location. Our advanced matching algorithm
                    ensures that the right blood reaches the right person at the
                    right time, potentially saving precious minutes in emergency
                    situations.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <div className="aspect-video bg-background rounded-md flex items-center justify-center">
                    <img
                      src="/images/real-time-matching.svg"
                      alt="Real-time matching illustration"
                      className="max-w-full max-h-full"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent)
                          parent.innerHTML = "Real-time matching visualization";
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 md:mt-32">
                <div className="order-2 md:order-1 bg-muted rounded-lg p-6">
                  <div className="aspect-video bg-background rounded-md flex items-center justify-center">
                    <img
                      src="/images/notifications.svg"
                      alt="Smart notifications illustration"
                      className="max-w-full max-h-full"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent)
                          parent.innerHTML =
                            "Smart notifications visualization";
                      }}
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Bell className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Smart Notifications</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Get notified immediately when there's a match or when blood
                    is urgently needed. Our notification system prioritizes
                    urgent cases and sends alerts to the most suitable donors in
                    the vicinity, ensuring rapid response to critical
                    situations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 md:mt-32">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Secure & Private</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Your medical information is protected with enterprise-grade
                    security and HIPAA compliance. We implement end-to-end
                    encryption for all sensitive data and maintain strict access
                    controls to ensure your personal and medical information
                    remains confidential at all times.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <div className="aspect-video bg-background rounded-md flex items-center justify-center">
                    <img
                      src="/images/security.svg"
                      alt="Security illustration"
                      className="max-w-full max-h-full"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent)
                          parent.innerHTML =
                            "Security and privacy visualization";
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 md:mt-32">
                <div className="order-2 md:order-1 bg-muted rounded-lg p-6">
                  <div className="aspect-video bg-background rounded-md flex items-center justify-center">
                    <img
                      src="/images/easy-to-use.svg"
                      alt="Easy to use illustration"
                      className="max-w-full max-h-full"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent)
                          parent.innerHTML =
                            "User-friendly interface visualization";
                      }}
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Easy to Use</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Simple, intuitive interface designed for quick access during
                    emergencies. Our app is designed with simplicity in mind,
                    allowing users to navigate through the donation process with
                    minimal steps, making it accessible to users of all
                    technical abilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Ready to Save Lives?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join our community of donors and help make a difference today.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="/register"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                  Register as Donor
                </a>
                <a
                  href="/requests"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  View Blood Requests
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
