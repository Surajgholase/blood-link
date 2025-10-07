import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Phone, Clock, Droplet } from "lucide-react";

// Mock data for blood banks
const mockBloodBanks = [
  {
    id: 1,
    name: "Central Blood Bank",
    address: "123 Main Street, Downtown",
    city: "New York",
    phone: "(212) 555-1234",
    hours: "Mon-Fri: 8AM-8PM, Sat-Sun: 10AM-6PM",
    availableBloodTypes: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    distance: "1.2 miles",
    rating: 4.8,
    donorsThisMonth: 245,
  },
  {
    id: 2,
    name: "Memorial Hospital Blood Center",
    address: "456 Health Avenue, Midtown",
    city: "New York",
    phone: "(212) 555-5678",
    hours: "Mon-Sun: 24 hours",
    availableBloodTypes: ["A+", "B+", "O+", "O-"],
    distance: "2.5 miles",
    rating: 4.6,
    donorsThisMonth: 189,
  },
  {
    id: 3,
    name: "Community Blood Services",
    address: "789 Helper Road, Uptown",
    city: "New York",
    phone: "(212) 555-9012",
    hours: "Mon-Fri: 9AM-7PM, Sat: 10AM-4PM",
    availableBloodTypes: ["A+", "A-", "AB+", "O+", "O-"],
    distance: "3.8 miles",
    rating: 4.5,
    donorsThisMonth: 156,
  },
  {
    id: 4,
    name: "Regional Blood Center",
    address: "321 Medical Drive, East Side",
    city: "New York",
    phone: "(212) 555-3456",
    hours: "Mon-Fri: 8AM-6PM",
    availableBloodTypes: ["A+", "B+", "B-", "O+"],
    distance: "4.2 miles",
    rating: 4.3,
    donorsThisMonth: 132,
  },
  {
    id: 5,
    name: "University Hospital Blood Bank",
    address: "654 College Blvd, West Campus",
    city: "New York",
    phone: "(212) 555-7890",
    hours: "Mon-Sun: 7AM-9PM",
    availableBloodTypes: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    distance: "5.7 miles",
    rating: 4.9,
    donorsThisMonth: 278,
  },
];

export default function BloodBanksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Blood Banks
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Find blood banks near you for donation or to fulfill your blood
                requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search by location, name, or blood type..."
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button>Search</Button>
                </div>
              </div>

              <div className="grid gap-6 mt-6">
                {mockBloodBanks.map((bloodBank) => (
                  <BloodBankCard key={bloodBank.id} bloodBank={bloodBank} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

interface BloodBank {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  availableBloodTypes: string[];
  distance: string;
  rating: number;
  donorsThisMonth: number;
}

function BloodBankCard({ bloodBank }: { bloodBank: BloodBank }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-foreground">
                {bloodBank.name}
              </h3>
              <Badge variant="outline">{bloodBank.distance}</Badge>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  {bloodBank.address}, {bloodBank.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{bloodBank.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>{bloodBank.hours}</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-sm font-medium mb-2">
                Available Blood Types:
              </div>
              <div className="flex flex-wrap gap-2">
                {bloodBank.availableBloodTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-md text-xs">
                    <Droplet className="h-3 w-3 text-primary" />
                    {type}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Schedule Donation</Button>
              <Button variant="outline">View Details</Button>
            </div>
          </div>

          <div className="md:w-48 flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {bloodBank.donorsThisMonth}
              </div>
              <div className="text-sm text-muted-foreground">
                donors this month
              </div>
              <div className="flex items-center justify-center mt-2">
                <div className="text-amber-500 text-lg font-bold">
                  {bloodBank.rating}
                </div>
                <div className="text-sm text-muted-foreground ml-1">/ 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
