import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, Trash } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

export default function NewOrderPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/orders">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Create New Order</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
              <CardDescription>Add products to this order.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Quantity</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wireless-headphones">Wireless Headphones</SelectItem>
                            <SelectItem value="bluetooth-speaker">Bluetooth Speaker</SelectItem>
                            <SelectItem value="smartphone-case">Smartphone Case</SelectItem>
                            <SelectItem value="usb-c-cable">USB-C Cable</SelectItem>
                            <SelectItem value="wireless-mouse">Wireless Mouse</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">$89.99</TableCell>
                      <TableCell className="text-right">
                        <Input type="number" min="1" defaultValue="1" className="w-16 text-right ml-auto" />
                      </TableCell>
                      <TableCell className="text-right">$89.99</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="text-destructive">
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wireless-headphones">Wireless Headphones</SelectItem>
                            <SelectItem value="bluetooth-speaker">Bluetooth Speaker</SelectItem>
                            <SelectItem value="smartphone-case">Smartphone Case</SelectItem>
                            <SelectItem value="usb-c-cable">USB-C Cable</SelectItem>
                            <SelectItem value="wireless-mouse">Wireless Mouse</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">$19.99</TableCell>
                      <TableCell className="text-right">
                        <Input type="number" min="1" defaultValue="2" className="w-16 text-right ml-auto" />
                      </TableCell>
                      <TableCell className="text-right">$39.98</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="text-destructive">
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <Button variant="outline" className="mt-4" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
              <CardDescription>Enter shipping details for this order.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="shipping-address">Shipping Address</Label>
                  <Textarea id="shipping-address" placeholder="Enter shipping address" rows={3} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="shipping-method">Shipping Method</Label>
                    <Select>
                      <SelectTrigger id="shipping-method">
                        <SelectValue placeholder="Select shipping method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Shipping (3-5 days)</SelectItem>
                        <SelectItem value="express">Express Shipping (1-2 days)</SelectItem>
                        <SelectItem value="overnight">Overnight Shipping</SelectItem>
                        <SelectItem value="pickup">Local Pickup</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="tracking-number">Tracking Number</Label>
                    <Input id="tracking-number" placeholder="Enter tracking number (optional)" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
              <CardDescription>Enter payment details for this order.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="payment-method">Payment Method</Label>
                  <Select>
                    <SelectTrigger id="payment-method">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit-card">Credit Card</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                      <SelectItem value="cash">Cash on Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="payment-status">Payment Status</Label>
                  <Select>
                    <SelectTrigger id="payment-status">
                      <SelectValue placeholder="Select payment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="payment-notes">Payment Notes</Label>
                  <Textarea id="payment-notes" placeholder="Enter payment notes (optional)" rows={2} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>Select or create a customer for this order.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="customer">Select Customer</Label>
                  <Select>
                    <SelectTrigger id="customer">
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john-smith">John Smith</SelectItem>
                      <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                      <SelectItem value="michael-brown">Michael Brown</SelectItem>
                      <SelectItem value="emily-davis">Emily Davis</SelectItem>
                      <SelectItem value="david-wilson">David Wilson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="text-sm font-medium">Or create new customer</div>

                <div className="grid gap-3">
                  <Label htmlFor="customer-name">Customer Name</Label>
                  <Input id="customer-name" placeholder="Enter customer name" />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="customer-email">Email</Label>
                  <Input id="customer-email" type="email" placeholder="Enter customer email" />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="customer-phone">Phone</Label>
                  <Input id="customer-phone" placeholder="Enter customer phone" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review order details before submission.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$129.97</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>$9.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>$10.40</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>$150.36</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="grid gap-3 w-full">
                <Label htmlFor="order-status">Order Status</Label>
                <Select>
                  <SelectTrigger id="order-status">
                    <SelectValue placeholder="Select order status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3 w-full">
                <Label htmlFor="order-notes">Order Notes</Label>
                <Textarea id="order-notes" placeholder="Enter order notes (optional)" rows={2} />
              </div>
              <div className="flex justify-between w-full">
                <Button variant="outline" asChild>
                  <Link href="/orders">Cancel</Link>
                </Button>
                <Button>Create Order</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
