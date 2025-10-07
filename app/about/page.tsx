import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Heart, Users, Globe, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                About Blood Link
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Connecting donors, recipients, and blood banks to save lives
                through innovative technology.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-muted-foreground mb-4">
                    At Blood Link, we're on a mission to revolutionize blood
                    donation and distribution. We believe that every second
                    counts in emergency situations, and our platform is designed
                    to minimize delays and maximize efficiency in the blood
                    supply chain.
                  </p>
                  <p className="text-muted-foreground">
                    By connecting donors directly with recipients and blood
                    banks, we create a seamless ecosystem that ensures blood is
                    available when and where it's needed most.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <div className="aspect-video bg-background rounded-md flex items-center justify-center">
                    <img
                          src="/placeholder.svg"
                          alt="Blood Link mission"
                          className="max-w-full max-h-full"
                        />
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <h2 className="text-3xl font-bold mb-10 text-center">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Compassion</h3>
                    <p className="text-muted-foreground">
                      We care deeply about the well-being of donors, recipients,
                      and the communities we serve.
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                    <p className="text-muted-foreground">
                      We believe in the power of working together with blood
                      banks, hospitals, and communities.
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                    <p className="text-muted-foreground">
                      We strive to make blood donation and access available to
                      everyone, everywhere.
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      We pursue the highest standards in technology, service,
                      and safety.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <h2 className="text-3xl font-bold mb-10 text-center">
                  Our Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-card p-6 rounded-lg shadow-sm text-center">
                      <div className="mx-auto rounded-full overflow-hidden w-32 h-32 mb-4">
                        <img
                          src="/placeholder-user.jpg"
                          alt={`Team member ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-1">
                        Team Member {i}
                      </h3>
                      <p className="text-primary mb-3">Position Title</p>
                      <p className="text-muted-foreground">
                        Brief description about the team member and their role
                        in Blood Link.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
