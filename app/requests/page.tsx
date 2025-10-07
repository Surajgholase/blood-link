import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, MapPin, Clock, Droplet } from "lucide-react";
import { mockDonationRequests } from "@/lib/mock-data";
import { useState } from "react";

export default function RequestsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/20 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Blood Donation Requests
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                View current blood donation requests and help save lives by
                donating.
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
                        placeholder="Search by location, blood type, or hospital..."
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button>Search</Button>
                </div>
              </div>

              <Tabs defaultValue="urgent" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="urgent">Urgent</TabsTrigger>
                  <TabsTrigger value="all">All Requests</TabsTrigger>
                  <TabsTrigger value="my-blood-type">My Blood Type</TabsTrigger>
                </TabsList>
                <TabsContent value="urgent">
                  <div className="grid gap-6 mt-6">
                    {mockDonationRequests
                      .filter(
                        (request) =>
                          request.urgencyLevel === "critical" ||
                          request.urgencyLevel === "urgent"
                      )
                      .map((request) => (
                        <RequestCard key={request.id} request={request} />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="all">
                  <div className="grid gap-6 mt-6">
                    {mockDonationRequests.map((request) => (
                      <RequestCard key={request.id} request={request} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="my-blood-type">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      Please sign in to see requests matching your blood type
                    </p>
                    <Button className="mt-4">Sign In</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function RequestCard({ request }: { request: any }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-foreground">
                {request.recipientName}
              </h3>
              <Badge
                variant={
                  request.urgencyLevel === "critical" ||
                  request.urgencyLevel === "urgent"
                    ? "destructive"
                    : "outline"
                }>
                {request.urgencyLevel.charAt(0).toUpperCase() +
                  request.urgencyLevel.slice(1)}
              </Badge>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Droplet className="h-4 w-4 flex-shrink-0" />
                <span>
                  Blood Type: <strong>{request.bloodType}</strong> (
                  {request.unitsNeeded} units needed)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  {request.hospital}, {request.city}, {request.state}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 flex-shrink-0" />
                <span>
                  Posted on {request.requestDate.toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Status: {request.status}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Donate Now</Button>
              <Button variant="outline">Share</Button>
            </div>
          </div>

          <div className="md:w-48 flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">0</div>
              <div className="text-sm text-muted-foreground">
                of {request.unitsNeeded} units
              </div>
              <div className="w-full bg-secondary h-2 rounded-full mt-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{
                    width: `0%`,
                  }}></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
