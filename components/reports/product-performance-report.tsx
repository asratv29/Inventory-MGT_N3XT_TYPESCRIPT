"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function ProductPerformanceReport() {
  // This would typically come from your database
  const performanceData = [
    {
      product: "Wireless Headphones",
      sales: 120,
      returns: 5,
    },
    {
      product: "Bluetooth Speaker",
      sales: 95,
      returns: 3,
    },
    {
      product: "Smartphone Case",
      sales: 85,
      returns: 2,
    },
    {
      product: "USB-C Cable",
      sales: 75,
      returns: 1,
    },
    {
      product: "Wireless Mouse",
      sales: 65,
      returns: 2,
    },
    {
      product: "Power Bank",
      sales: 60,
      returns: 1,
    },
    {
      product: "Laptop Sleeve",
      sales: 55,
      returns: 0,
    },
  ]

  const topProducts = [
    {
      name: "Wireless Headphones",
      category: "Electronics",
      sales: 120,
      revenue: 10800,
      profit: 5400,
      trend: "up",
    },
    {
      name: "Bluetooth Speaker",
      category: "Electronics",
      sales: 95,
      revenue: 5700,
      profit: 2850,
      trend: "up",
    },
    {
      name: "Smartphone Case",
      category: "Accessories",
      sales: 85,
      revenue: 1700,
      profit: 1020,
      trend: "up",
    },
    {
      name: "USB-C Cable",
      category: "Electronics",
      sales: 75,
      revenue: 975,
      profit: 585,
      trend: "down",
    },
    {
      name: "Wireless Mouse",
      category: "Electronics",
      sales: 65,
      revenue: 1950,
      profit: 975,
      trend: "up",
    },
    {
      name: "Power Bank",
      category: "Electronics",
      sales: 60,
      revenue: 3000,
      profit: 1500,
      trend: "down",
    },
    {
      name: "Laptop Sleeve",
      category: "Accessories",
      sales: 55,
      revenue: 1375,
      profit: 825,
      trend: "up",
    },
    {
      name: "HDMI Cable",
      category: "Electronics",
      sales: 50,
      revenue: 500,
      profit: 300,
      trend: "down",
    },
    {
      name: "Tablet Stand",
      category: "Accessories",
      sales: 45,
      revenue: 675,
      profit: 405,
      trend: "up",
    },
    {
      name: "Wireless Charger",
      category: "Electronics",
      sales: 40,
      revenue: 1400,
      profit: 700,
      trend: "up",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Top Product Performance</CardTitle>
          <CardDescription>Sales and returns by product</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveBar
              data={performanceData}
              keys={["sales", "returns"]}
              indexBy="product"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "nivo" }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -45,
                legend: "Product",
                legendPosition: "middle",
                legendOffset: 40,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Count",
                legendPosition: "middle",
                legendOffset: -40,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              role="application"
              ariaLabel="Product performance chart"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Top Performing Products</CardTitle>
          <CardDescription>Products with the highest sales and revenue</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Sales</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
                <TableHead className="text-right">Profit</TableHead>
                <TableHead>Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topProducts.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="text-right">{product.sales}</TableCell>
                  <TableCell className="text-right">${product.revenue.toLocaleString()}</TableCell>
                  <TableCell className="text-right">${product.profit.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={product.trend === "up" ? "secondary" : "outline"}>
                      {product.trend === "up" ? "↑ Up" : "↓ Down"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
