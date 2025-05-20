"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { LiveSearch } from "@/components/live-search"
import { useState } from "react"

export default function ProductsPage() {
  // This would typically come from your database
  const allProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      sku: "WH-001",
      category: "Electronics",
      price: 89.99,
      inStock: 5,
      status: "Low Stock",
    },
    {
      id: 2,
      name: "USB-C Cable",
      sku: "USB-C-002",
      category: "Electronics",
      price: 12.99,
      inStock: 8,
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Smartphone Case",
      sku: "SC-003",
      category: "Accessories",
      price: 19.99,
      inStock: 7,
      status: "Low Stock",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      sku: "WM-004",
      category: "Electronics",
      price: 29.99,
      inStock: 3,
      status: "Low Stock",
    },
    {
      id: 5,
      name: "HDMI Cable",
      sku: "HDMI-005",
      category: "Electronics",
      price: 9.99,
      inStock: 6,
      status: "Low Stock",
    },
    {
      id: 6,
      name: "Laptop Sleeve",
      sku: "LS-006",
      category: "Accessories",
      price: 24.99,
      inStock: 15,
      status: "In Stock",
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      sku: "BS-007",
      category: "Electronics",
      price: 59.99,
      inStock: 12,
      status: "In Stock",
    },
    {
      id: 8,
      name: "Wireless Charger",
      sku: "WC-008",
      category: "Electronics",
      price: 34.99,
      inStock: 20,
      status: "In Stock",
    },
    {
      id: 9,
      name: "Tablet Stand",
      sku: "TS-009",
      category: "Accessories",
      price: 14.99,
      inStock: 18,
      status: "In Stock",
    },
    {
      id: 10,
      name: "Power Bank",
      sku: "PB-010",
      category: "Electronics",
      price: 49.99,
      inStock: 25,
      status: "In Stock",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter products based on search term and filters
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || product.category.toLowerCase() === categoryFilter.toLowerCase()

    const matchesStatus =
      statusFilter === "all" || product.status.toLowerCase().replace(" ", "-") === statusFilter.toLowerCase()

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
          <CardDescription>Manage your product inventory, prices, and stock levels.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <LiveSearch placeholder="Search products..." onSearch={setSearchTerm} initialValue={searchTerm} />
              </div>
              <Select defaultValue="all" onValueChange={setCategoryFilter} value={categoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all" onValueChange={setStatusFilter} value={statusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="in-stock">In Stock</SelectItem>
                  <SelectItem value="low-stock">Low Stock</SelectItem>
                  <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">In Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.sku}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                        <TableCell className="text-right">{product.inStock}</TableCell>
                        <TableCell>
                          <Badge variant={product.status === "Low Stock" ? "outline" : "secondary"}>
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/products/${product.id}/edit`}>
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
                        No products found.
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
