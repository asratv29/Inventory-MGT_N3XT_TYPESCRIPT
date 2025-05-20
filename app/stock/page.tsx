"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp } from "lucide-react"
import { LiveSearch } from "@/components/live-search"
import { useState } from "react"

export default function StockPage() {
  // This would typically come from your database
  const allStockMovements = [
    {
      id: 1,
      date: "2023-05-15",
      product: "Wireless Headphones",
      type: "in",
      quantity: 50,
      reference: "PO-12345",
      user: "John Doe",
    },
    {
      id: 2,
      date: "2023-05-14",
      product: "USB-C Cable",
      type: "out",
      quantity: 10,
      reference: "SO-67890",
      user: "Mike Johnson",
    },
    {
      id: 3,
      date: "2023-05-14",
      product: "Smartphone Case",
      type: "in",
      quantity: 25,
      reference: "PO-12346",
      user: "Jane Smith",
    },
    {
      id: 4,
      date: "2023-05-13",
      product: "Wireless Mouse",
      type: "out",
      quantity: 5,
      reference: "SO-67891",
      user: "Sarah Williams",
    },
    {
      id: 5,
      date: "2023-05-13",
      product: "HDMI Cable",
      type: "in",
      quantity: 30,
      reference: "PO-12347",
      user: "David Brown",
    },
    {
      id: 6,
      date: "2023-05-12",
      product: "Laptop Sleeve",
      type: "out",
      quantity: 8,
      reference: "SO-67892",
      user: "Mike Johnson",
    },
    {
      id: 7,
      date: "2023-05-12",
      product: "Bluetooth Speaker",
      type: "in",
      quantity: 20,
      reference: "PO-12348",
      user: "John Doe",
    },
    {
      id: 8,
      date: "2023-05-11",
      product: "Wireless Charger",
      type: "out",
      quantity: 12,
      reference: "SO-67893",
      user: "Jane Smith",
    },
    {
      id: 9,
      date: "2023-05-11",
      product: "Tablet Stand",
      type: "in",
      quantity: 15,
      reference: "PO-12349",
      user: "David Brown",
    },
    {
      id: 10,
      date: "2023-05-10",
      product: "Power Bank",
      type: "out",
      quantity: 7,
      reference: "SO-67894",
      user: "Sarah Williams",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  // Filter stock movements based on search term and filters
  const filteredMovements = allStockMovements.filter((movement) => {
    const matchesSearch =
      movement.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.user.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = typeFilter === "all" || movement.type === typeFilter

    // For simplicity, we're not implementing actual date filtering logic here
    const matchesDate = dateFilter === "all"

    return matchesSearch && matchesType && matchesDate
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Stock Management</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <ArrowDown className="mr-2 h-4 w-4" />
            Stock Out
          </Button>
          <Button>
            <ArrowUp className="mr-2 h-4 w-4" />
            Stock In
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stock Movements</CardTitle>
          <CardDescription>Track all stock movements, including additions and removals.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <LiveSearch placeholder="Search products..." onSearch={setSearchTerm} initialValue={searchTerm} />
              </div>
              <Select defaultValue="all" onValueChange={setTypeFilter} value={typeFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Movement Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Movements</SelectItem>
                  <SelectItem value="in">Stock In</SelectItem>
                  <SelectItem value="out">Stock Out</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all" onValueChange={setDateFilter} value={dateFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead>User</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMovements.length > 0 ? (
                    filteredMovements.map((movement) => (
                      <TableRow key={movement.id}>
                        <TableCell>{movement.date}</TableCell>
                        <TableCell className="font-medium">{movement.product}</TableCell>
                        <TableCell>
                          <Badge variant={movement.type === "in" ? "secondary" : "outline"}>
                            {movement.type === "in" ? (
                              <span className="flex items-center">
                                <ArrowUp className="mr-1 h-3 w-3" />
                                Stock In
                              </span>
                            ) : (
                              <span className="flex items-center">
                                <ArrowDown className="mr-1 h-3 w-3" />
                                Stock Out
                              </span>
                            )}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{movement.quantity}</TableCell>
                        <TableCell>{movement.reference}</TableCell>
                        <TableCell>{movement.user}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        No stock movements found.
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
