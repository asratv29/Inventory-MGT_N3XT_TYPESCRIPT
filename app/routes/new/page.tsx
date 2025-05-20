import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewRoutePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/routes">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Add New Route</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Route Information</CardTitle>
          <CardDescription>Enter the details for the new delivery route.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Route Name</Label>
              <Input id="name" placeholder="Enter route name" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter route description" rows={3} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="driver">Driver</Label>
                <Select>
                  <SelectTrigger id="driver">
                    <SelectValue placeholder="Select driver" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john-smith">John Smith</SelectItem>
                    <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                    <SelectItem value="michael-brown">Michael Brown</SelectItem>
                    <SelectItem value="emily-davis">Emily Davis</SelectItem>
                    <SelectItem value="david-wilson">David Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="vehicle">Vehicle</Label>
                <Select>
                  <SelectTrigger id="vehicle">
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="van-103">Van #103</SelectItem>
                    <SelectItem value="van-104">Van #104</SelectItem>
                    <SelectItem value="van-107">Van #107</SelectItem>
                    <SelectItem value="truck-205">Truck #205</SelectItem>
                    <SelectItem value="truck-208">Truck #208</SelectItem>
                    <SelectItem value="truck-210">Truck #210</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="stops">Number of Stops</Label>
                <Input id="stops" type="number" placeholder="0" min="1" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="estimated-time">Estimated Time (hours)</Label>
                <Input id="estimated-time" type="number" placeholder="0" min="0.5" step="0.5" />
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/routes">Cancel</Link>
          </Button>
          <Button>Save Route</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
