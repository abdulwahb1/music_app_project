import { Headphones, List, Info, Clock, Star, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const features = [
  {
    icon: Headphones,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    text: "Keep track of all the music you have listened to (or just start from the day you join)",
  },
  {
    icon: List,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    text: "Write reviews and rate music to share your opinions with friends and our community",
  },
  {
    icon: Info,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    text: "Collect music into lists and show off your favorite albums, rank an artist's discography, and more",
  },
  {
    icon: Clock,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    text: "Save music you haven't listened to yet and stay up to date as new albums are being released",
  },
  {
    icon: Star,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    text: "Browse our Top 250 and Most Popular sections to discover great music and new artists",
  },
  {
    icon: BarChart,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    text: "Unlock in-depth statistics about your musical interests and more with Musicboard Pro",
  },
];

export function Features() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-white ml-3">
        Musicboard provides you
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-gray-700 hover:bg-gray-900"
              >
                <CardHeader></CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <Icon
                      className={`w-6 h-6 ${feature.color} transition-transform duration-300 ease-in-out group-hover:scale-110`}
                    />
                  </div>
                  <p className="text-muted-foreground">{feature.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
