"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Plus, Trash2 } from "lucide-react"
import { LiveSearch } from "@/components/live-search"
import { useState } from "react"

export default function CategoriesPage() {
  // This would typically come from your database
  const allCategories = [
    {
      id: 1,
      name: "Electronics",
      description: "Electronic devices and accessories",
      productCount: 145,
    },
    {
      id: 2,
      name: "Clothing",
      description: "Apparel and fashion items",
      productCount: 89,
    },
    {
      id: 3,
      name: "Home Goods",
      description: "Items for home and living",
      productCount: 76,
    },
    {
      id: 4,
      name: "Sports",
      description: "Sports equipment and accessories",
      productCount: 52,
    },
    {
      id: 5,
      name: "Books",
      description: "Books and publications",
      productCount: 38,
    },
    {
      id: 6,
      name: "Toys",
      description: "Toys and games",
      productCount: 29,
    },
    {
      id: 7,
      name: "Office",
      description: "Office supplies and equipment",
      productCount: 24,
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")

  // Filter categories based on search term
  const filteredCategories = allCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Categories</CardTitle>
          <CardDescription>Manage your product categories and organization.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <LiveSearch
                placeholder="Search categories..."
                onSearch={setSearchTerm}
                initialValue={searchTerm}
                className="w-full md:max-w-sm"
              />
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Products</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                      <TableRow key={category.id}>
                        <TableCell className="font-medium">{category.name}</TableCell>
                        <TableCell>{category.description}</TableCell>
                        <TableCell className="text-right">{category.productCount}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
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
                      <TableCell colSpan={4} className="h-24 text-center">
                        No categories found.
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
