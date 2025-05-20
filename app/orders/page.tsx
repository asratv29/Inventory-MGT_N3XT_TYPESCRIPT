"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Eye, Plus, Trash2 } from "lucide-react"
import { LiveSearch } from "@/components/live-search"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function OrdersPage() {
  // This would typically come from your database
  const allOrders = [
    {
      id: "ORD-1001",
      customer: "John Smith",
      email: "john@example.com",
      date: "2023-05-15",
      total: 249.99,
      items: 3,
      status: "Delivered",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-1002",
      customer: "Sarah Johnson",
      email: "sarah@example.com",
      date: "2023-05-14",
      total: 129.95,
      items: 2,
      status: "Shipped",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-1003",
      customer: "Michael Brown",
      email: "michael@example.com",
      date: "2023-05-14",
      total: 349.5,
      items: 4,
      status: "Processing",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-1004",
      customer: "Emily Davis",
      email: "emily@example.com",
      date: "2023-05-13",
      total: 89.99,
      items: 1,
      status: "Pending",
      paymentStatus: "Pending",
    },
    {
      id: "ORD-1005",
      customer: "David Wilson",
      email: "david@example.com",
      date: "2023-05-13",
      total: 199.95,
      items: 2,
      status: "Delivered",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-1006",
      customer: "Jessica Martinez",
      email: "jessica@example.com",
      date: "2023-05-12",
      total: 159.98,
      items: 3,
      status: "Cancelled",
      paymentStatus: "Refunded",
    },
    {
      id: "ORD-1007",
      customer: "Robert Taylor",
      email: "robert@example.com",
      date: "2023-05-12",
      total: 299.97,
      items: 3,
      status: "Shipped",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-1008",
      customer: "Jennifer Anderson",
      email: "jennifer@example.com",
      date: "2023-05-11",
      total: 79.99,
      items: 1,
      status: "Delivered",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-1009",
      customer: "Christopher Thomas",
      email: "chris@example.com",
      date: "2023-05-11",
      total: 149.95,
      items: 2,
      status: "Processing",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-1010",
      customer: "Lisa Rodriguez",
      email: "lisa@example.com",
      date: "2023-05-10",
      total: 399.99,
      items: 5,
      status: "Pending",
      paymentStatus: "Pending",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [paymentFilter, setPaymentFilter] = useState("all")

  // Filter orders based on search term and filters
  const filteredOrders = allOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase()

    const matchesPayment = paymentFilter === "all" || order.paymentStatus.toLowerCase() === paymentFilter.toLowerCase()

    return matchesSearch && matchesStatus && matchesPayment
  })

  // Function to determine badge color based on status
  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "secondary"
      case "shipped":
        return "default"
      case "processing":
        return "outline"
      case "pending":
        return "outline"
      case "cancelled":
        return "destructive"
      default:
        return "outline"
    }
  }

  // Function to determine badge color based on payment status
  const getPaymentBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "secondary"
      case "pending":
        return "outline"
      case "refunded":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <Button asChild>
          <Link href="/orders/new">
            <Plus className="mr-2 h-4 w-4" />
            New Order
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
          <CardDescription>View and manage customer orders.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <LiveSearch placeholder="Search orders..." onSearch={setSearchTerm} initialValue={searchTerm} />
              </div>
              <Select defaultValue="all" onValueChange={setStatusFilter} value={statusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Order Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all" onValueChange={setPaymentFilter} value={paymentFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Payment Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Payments</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Items</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>
                          <div>
                            <div>{order.customer}</div>
                            <div className="text-xs text-muted-foreground">{order.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="text-right">{order.items}</TableCell>
                        <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(order.status)}>{order.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getPaymentBadgeVariant(order.paymentStatus)}>{order.paymentStatus}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/orders/${order.id}`}>
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/orders/${order.id}/edit`}>
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
                      <TableCell colSpan={8} className="h-24 text-center">
                        No orders found.
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
