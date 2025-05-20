"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"

export function InventoryOverview() {
  // This would typically come from your database
  const data = [
    { category: "Electronics", count: 245, value: 42500 },
    { category: "Clothing", count: 189, value: 18900 },
    { category: "Home Goods", count: 156, value: 23400 },
    { category: "Sports", count: 132, value: 19800 },
    { category: "Books", count: 98, value: 4900 },
    { category: "Toys", count: 76, value: 7600 },
    { category: "Office", count: 67, value: 6700 },
  ]

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Inventory Overview</CardTitle>
        <CardDescription>Distribution of products by category</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] w-full">
          <ResponsiveBar
            data={data}
            keys={["count"]}
            indexBy="category"
            margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -45,
              legend: "Category",
              legendPosition: "middle",
              legendOffset: 40,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Product Count",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            role="application"
            ariaLabel="Inventory overview chart"
          />
        </div>
      </CardContent>
    </Card>
  )
}
