"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, ExternalLink, Mail, Phone, Plus, Trash2 } from "lucide-react"
import { LiveSearch } from "@/components/live-search"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function SuppliersPage() {
  // This would typically come from your database
  const allSuppliers = [
    {
      id: 1,
      name: "TechSupply Inc.",
      contactName: "Robert Johnson",
      email: "robert@techsupply.com",
      phone: "(555) 123-4567",
      category: "Electronics",
      status: "Active",
      orders: 24,
      lastOrder: "2023-05-10",
    },
    {
      id: 2,
      name: "Global Gadgets",
      contactName: "Sarah Williams",
      email: "sarah@globalgadgets.com",
      phone: "(555) 234-5678",
      category: "Electronics",
      status: "Active",
      orders: 18,
      lastOrder: "2023-05-12",
    },
    {
      id: 3,
      name: "Fashion Forward",
      contactName: "Michael Brown",
      email: "michael@fashionforward.com",
      phone: "(555) 345-6789",
      category: "Clothing",
      status: "Active",
      orders: 15,
      lastOrder: "2023-05-08",
    },
    {
      id: 4,
      name: "Home Essentials",
      contactName: "Emily Davis",
      email: "emily@homeessentials.com",
      phone: "(555) 456-7890",
      category: "Home Goods",
      status: "Inactive",
      orders: 12,
      lastOrder: "2023-04-25",
    },
    {
      id: 5,
      name: "Sports Unlimited",
      contactName: "David Wilson",
      email: "david@sportsunlimited.com",
      phone: "(555) 567-8901",
      category: "Sports",
      status: "Active",
      orders: 10,
      lastOrder: "2023-05-05",
    },
    {
      id: 6,
      name: "Office Solutions",
      contactName: "Jessica Martinez",
      email: "jessica@officesolutions.com",
      phone: "(555) 678-9012",
      category: "Office",
      status: "Active",
      orders: 8,
      lastOrder: "2023-05-11",
    },
    {
      id: 7,
      name: "Book World",
      contactName: "James Taylor",
      email: "james@bookworld.com",
      phone: "(555) 789-0123",
      category: "Books",
      status: "Inactive",
      orders: 5,
      lastOrder: "2023-04-15",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter suppliers based on search term and filters
  const filteredSuppliers = allSuppliers.filter((supplier) => {
    const matchesSearch =
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.phone.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || supplier.category.toLowerCase() === categoryFilter.toLowerCase()

    const matchesStatus = statusFilter === "all" || supplier.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Suppliers</h1>
        <Button asChild>
          <Link href="/suppliers/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Supplier
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Supplier Directory</CardTitle>
          <CardDescription>Manage your suppliers and vendor relationships.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <LiveSearch placeholder="Search suppliers..." onSearch={setSearchTerm} initialValue={searchTerm} />
              </div>
              <Select defaultValue="all" onValueChange={setCategoryFilter} value={categoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="home goods">Home Goods</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                </SelectContent>
              </Select>
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
                    <TableHead>Supplier</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Orders</TableHead>
                    <TableHead>Last Order</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSuppliers.length > 0 ? (
                    filteredSuppliers.map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell className="font-medium">
                          <div>
                            <div>{supplier.name}</div>
                            <div className="text-xs text-muted-foreground">{supplier.contactName}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <div className="flex items-center text-xs">
                              <Mail className="mr-1 h-3 w-3" />
                              <a href={`mailto:${supplier.email}`} className="hover:underline">
                                {supplier.email}
                              </a>
                            </div>
                            <div className="flex items-center text-xs mt-1">
                              <Phone className="mr-1 h-3 w-3" />
                              <a href={`tel:${supplier.phone}`} className="hover:underline">
                                {supplier.phone}
                              </a>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{supplier.category}</TableCell>
                        <TableCell className="text-right">{supplier.orders}</TableCell>
                        <TableCell>{supplier.lastOrder}</TableCell>
                        <TableCell>
                          <Badge variant={supplier.status === "Active" ? "secondary" : "outline"}>
                            {supplier.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/suppliers/${supplier.id}`}>
                                <ExternalLink className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/suppliers/${supplier.id}/edit`}>
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
                        No suppliers found.
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
