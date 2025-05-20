"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Trash2 } from "lucide-react"
import { LiveSearch } from "@/components/live-search"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function RoutesPage() {
  // This would typically come from your database
  const allRoutes = [
    {
      id: 1,
      name: "Downtown Delivery",
      description: "City center delivery route",
      driver: "John Smith",
      vehicle: "Van #103",
      status: "Active",
      stops: 12,
      estimatedTime: "2.5 hours",
    },
    {
      id: 2,
      name: "North District",
      description: "Northern suburbs delivery route",
      driver: "Sarah Johnson",
      vehicle: "Truck #205",
      status: "Active",
      stops: 18,
      estimatedTime: "3 hours",
    },
    {
      id: 3,
      name: "East County",
      description: "Eastern county delivery route",
      driver: "Michael Brown",
      vehicle: "Van #104",
      status: "Inactive",
      stops: 15,
      estimatedTime: "2.5 hours",
    },
    {
      id: 4,
      name: "South Express",
      description: "Southern express delivery route",
      driver: "Emily Davis",
      vehicle: "Truck #208",
      status: "Active",
      stops: 10,
      estimatedTime: "1.5 hours",
    },
    {
      id: 5,
      name: "West Side",
      description: "Western district delivery route",
      driver: "David Wilson",
      vehicle: "Van #107",
      status: "Active",
      stops: 14,
      estimatedTime: "2 hours",
    },
    {
      id: 6,
      name: "Industrial Zone",
      description: "Industrial area delivery route",
      driver: "Jessica Martinez",
      vehicle: "Truck #210",
      status: "Inactive",
      stops: 8,
      estimatedTime: "1.5 hours",
    },
    {
      id: 7,
      name: "Airport Express",
      description: "Airport and surrounding areas",
      driver: "Robert Taylor",
      vehicle: "Van #109",
      status: "Active",
      stops: 6,
      estimatedTime: "1 hour",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter routes based on search term and status filter
  const filteredRoutes = allRoutes.filter((route) => {
    const matchesSearch =
      route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.vehicle.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || route.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Delivery Routes</h1>
        <Button asChild>
          <Link href="/routes/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Route
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Routes</CardTitle>
          <CardDescription>Create and manage delivery routes for your inventory.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <LiveSearch placeholder="Search routes..." onSearch={setSearchTerm} initialValue={searchTerm} />
              </div>
              <Select defaultValue="all" onValueChange={setStatusFilter} value={statusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead>Vehicle</TableHead>
                    <TableHead className="text-right">Stops</TableHead>
                    <TableHead>Est. Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRoutes.length > 0 ? (
                    filteredRoutes.map((route) => (
                      <TableRow key={route.id}>
                        <TableCell className="font-medium">
                          <div>
                            <div>{route.name}</div>
                            <div className="text-xs text-muted-foreground">{route.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>{route.driver}</TableCell>
                        <TableCell>{route.vehicle}</TableCell>
                        <TableCell className="text-right">{route.stops}</TableCell>
                        <TableCell>{route.estimatedTime}</TableCell>
                        <TableCell>
                          <Badge variant={route.status === "Active" ? "secondary" : "outline"}>{route.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/routes/${route.id}/edit`}>
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Link>
                            </Button>
                            <Button variant="ghost" size="icon" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        No routes found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
