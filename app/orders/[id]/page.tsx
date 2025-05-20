import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Printer } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  // This would typically come from your database based on the ID
  const order = {
    id: params.id,
    customer: "John Smith",
    email: "john@example.com",
    phone: "(555) 123-4567",
    date: "2023-05-15",
    status: "Delivered",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    shippingMethod: "Express Shipping (1-2 days)",
    trackingNumber: "1Z999AA10123456784",
    shippingAddress: "123 Main St, Apt 4B\nNew York, NY 10001\nUnited States",
    items: [
      {
        id: 1,
        name: "Wireless Headphones",
        sku: "WH-001",
        price: 89.99,
        quantity: 1,
        total: 89.99,
      },
      {
        id: 2,
        name: "Smartphone Case",
        sku: "SC-003",
        price: 19.99,
        quantity: 2,
        total: 39.98,
      },
      {
        id: 3,
        name: "USB-C Cable",
        sku: "USB-C-002",
        price: 12.99,
        quantity: 1,
        total: 12.99,
      },
    ],
    subtotal: 142.96,
    shipping: 9.99,
    tax: 11.44,
    total: 164.39,
    notes: "Please leave package at the front door if no one answers.",
    history: [
      {
        date: "2023-05-15 14:30",
        status: "Delivered",
        description: "Package delivered to customer",
      },
      {
        date: "2023-05-14 09:15",
        status: "Shipped",
        description: "Order shipped via Express Shipping",
      },
      {
        date: "2023-05-13 16:45",
        status: "Processing",
        description: "Payment confirmed, preparing order",
      },
      {
        date: "2023-05-13 10:20",
        status: "Pending",
        description: "Order placed by customer",
      },
    ],
  }

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
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/orders">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Order {order.id}</h1>
          <Badge variant={getStatusBadgeVariant(order.status)} className="ml-2">
            {order.status}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
              <CardDescription>Products included in this order.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Quantity</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order.items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.sku}</TableCell>
                        <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                        <TableCell className="text-right">{item.quantity}</TableCell>
                        <TableCell className="text-right">${item.total.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
              <CardDescription>Delivery details for this order.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Shipping Address</h3>
                    <p className="text-sm whitespace-pre-line">{order.shippingAddress}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Shipping Method</h3>
                    <p className="text-sm">{order.shippingMethod}</p>
                    {order.trackingNumber && (
                      <div className="mt-2">
                        <h3 className="text-sm font-medium mb-1">Tracking Number</h3>
                        <p className="text-sm">{order.trackingNumber}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>Timeline of order status changes.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.history.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <p className="font-medium">{event.status}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <p className="text-sm">{event.description}</p>
                      {index < order.history.length - 1 && <Separator className="mt-2" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>Details about the customer.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">Name</h3>
                  <p className="text-sm">{order.customer}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Email</h3>
                  <p className="text-sm">
                    <a href={`mailto:${order.email}`} className="hover:underline">
                      {order.email}
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Phone</h3>
                  <p className="text-sm">
                    <a href={`tel:${order.phone}`} className="hover:underline">
                      {order.phone}
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
              <CardDescription>Payment details for this order.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">Payment Method</h3>
                  <p className="text-sm">{order.paymentMethod}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Payment Status</h3>
                  <Badge variant={getPaymentBadgeVariant(order.paymentStatus)}>{order.paymentStatus}</Badge>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Date</h3>
                  <p className="text-sm">{order.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Financial summary of the order.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${order.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              {order.notes && (
                <div className="w-full">
                  <h3 className="text-sm font-medium mb-1">Order Notes</h3>
                  <p className="text-sm">{order.notes}</p>
                </div>
              )}
              <div className="flex justify-between w-full">
                <Button variant="outline" asChild>
                  <Link href={`/orders/${order.id}/edit`}>Edit Order</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href="/orders">Back to Orders</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
