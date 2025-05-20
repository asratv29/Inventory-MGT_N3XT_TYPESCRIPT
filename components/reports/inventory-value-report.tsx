"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsivePie } from "@nivo/pie"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function InventoryValueReport() {
  // This would typically come from your database
  const inventoryData = [
    { id: "Electronics", label: "Electronics", value: 42500, color: "hsl(240, 70%, 50%)" },
    { id: "Clothing", label: "Clothing", value: 18900, color: "hsl(100, 70%, 50%)" },
    { id: "Home Goods", label: "Home Goods", value: 23400, color: "hsl(340, 70%, 50%)" },
    { id: "Sports", label: "Sports", value: 19800, color: "hsl(40, 70%, 50%)" },
    { id: "Books", label: "Books", value: 4900, color: "hsl(200, 70%, 50%)" },
  ]

  const topProducts = [
    { name: "Wireless Headphones", category: "Electronics", value: 4500 },
    { name: "Smartphone Case", category: "Accessories", value: 3750 },
    { name: "Bluetooth Speaker", category: "Electronics", value: 3600 },
    { name: "Laptop Sleeve", category: "Accessories", value: 3000 },
    { name: "Wireless Mouse", category: "Electronics", value: 2700 },
    { name: "USB-C Cable", category: "Electronics", value: 2600 },
    { name: "Power Bank", category: "Electronics", value: 2500 },
    { name: "HDMI Cable", category: "Electronics", value: 2400 },
    { name: "Tablet Stand", category: "Accessories", value: 2250 },
    { name: "Wireless Charger", category: "Electronics", value: 2100 },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Inventory Value by Category</CardTitle>
          <CardDescription>Total inventory value: $124,750</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsivePie
              data={inventoryData}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                },
              ]}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Top Products by Value</CardTitle>
          <CardDescription>Products with the highest inventory value</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Inventory Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topProducts.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="text-right">${product.value.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
