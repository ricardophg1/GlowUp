import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="flex-1 space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[1200px] mx-auto flex-col items-center gap-6 text-center px-4">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Transform your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Customer Success
            </span>{" "}
            operations
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Centralize, automate, and scale your customer success operations with our
            all-in-one platform. Boost engagement, reduce churn, and drive growth.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button asChild size="lg" className="min-w-[200px]">
              <Link href="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl border bg-background p-2">
              <div className="flex h-[200px] flex-col justify-between rounded-lg p-6">
                <Users className="h-12 w-12 text-purple-600" />
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">Customer Management</h3>
                  <p className="text-sm text-muted-foreground">
                    360° view of your customers with complete interaction history.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border bg-background p-2">
              <div className="flex h-[200px] flex-col justify-between rounded-lg p-6">
                <BarChart3 className="h-12 w-12 text-purple-600" />
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">Analytics & Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor key metrics and get predictive insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border bg-background p-2">
              <div className="flex h-[200px] flex-col justify-between rounded-lg p-6">
                <Zap className="h-12 w-12 text-purple-600" />
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    Automate workflows and engagement campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}