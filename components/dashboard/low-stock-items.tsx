import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpRight, Plus } from "lucide-react"
import Link from "next/link"

export function LowStockItems() {
  // This would typically come from your database
  const lowStockItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      sku: "WH-001",
      category: "Electronics",
      inStock: 5,
      minStock: 10,
      status: "Critical",
    },
    {
      id: 2,
      name: "USB-C Cable",
      sku: "USB-C-002",
      category: "Electronics",
      inStock: 8,
      minStock: 15,
      status: "Low",
    },
    {
      id: 3,
      name: "Smartphone Case",
      sku: "SC-003",
      category: "Accessories",
      inStock: 7,
      minStock: 10,
      status: "Low",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      sku: "WM-004",
      category: "Electronics",
      inStock: 3,
      minStock: 10,
      status: "Critical",
    },
    {
      id: 5,
      name: "HDMI Cable",
      sku: "HDMI-005",
      category: "Electronics",
      inStock: 6,
      minStock: 10,
      status: "Low",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Low Stock Items</CardTitle>
          <CardDescription>Products that need to be restocked soon</CardDescription>
        </div>
        <Button size="sm" className="h-8">
          <Plus className="mr-2 h-4 w-4" />
          Restock
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">In Stock</TableHead>
              <TableHead className="text-right">Min Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lowStockItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="text-right">{item.inStock}</TableCell>
                <TableCell className="text-right">{item.minStock}</TableCell>
                <TableCell>
                  <Badge variant={item.status === "Critical" ? "destructive" : "outline"}>{item.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/products/${item.id}`}>
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="sr-only">View details</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
