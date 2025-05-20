"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp } from "lucide-react"

export function StockMovementReport() {
  // This would typically come from your database
  const movementData = [
    {
      id: "Stock In",
      color: "hsl(120, 70%, 50%)",
      data: [
        { x: "Jan", y: 120 },
        { x: "Feb", y: 140 },
        { x: "Mar", y: 110 },
        { x: "Apr", y: 170 },
        { x: "May", y: 190 },
      ],
    },
    {
      id: "Stock Out",
      color: "hsl(0, 70%, 50%)",
      data: [
        { x: "Jan", y: 90 },
        { x: "Feb", y: 100 },
        { x: "Mar", y: 130 },
        { x: "Apr", y: 120 },
        { x: "May", y: 150 },
      ],
    },
  ]

  const recentMovements = [
    {
      date: "2023-05-15",
      product: "Wireless Headphones",
      type: "in",
      quantity: 50,
      reference: "PO-12345",
    },
    {
      date: "2023-05-14",
      product: "USB-C Cable",
      type: "out",
      quantity: 10,
      reference: "SO-67890",
    },
    {
      date: "2023-05-14",
      product: "Smartphone Case",
      type: "in",
      quantity: 25,
      reference: "PO-12346",
    },
    {
      date: "2023-05-13",
      product: "Wireless Mouse",
      type: "out",
      quantity: 5,
      reference: "SO-67891",
    },
    {
      date: "2023-05-13",
      product: "HDMI Cable",
      type: "in",
      quantity: 30,
      reference: "PO-12347",
    },
    {
      date: "2023-05-12",
      product: "Laptop Sleeve",
      type: "out",
      quantity: 8,
      reference: "SO-67892",
    },
    {
      date: "2023-05-12",
      product: "Bluetooth Speaker",
      type: "in",
      quantity: 20,
      reference: "PO-12348",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Stock Movement Trends</CardTitle>
          <CardDescription>Monthly stock in and out movements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveLine
              data={movementData}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: false,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Month",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Quantity",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Recent Stock Movements</CardTitle>
          <CardDescription>Latest stock in and out transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead>Reference</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentMovements.map((movement, index) => (
                <TableRow key={index}>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
