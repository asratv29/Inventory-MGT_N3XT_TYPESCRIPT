import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"
import { InventoryValueReport } from "@/components/reports/inventory-value-report"
import { StockMovementReport } from "@/components/reports/stock-movement-report"
import { ProductPerformanceReport } from "@/components/reports/product-performance-report"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="inventory" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="inventory">Inventory Value</TabsTrigger>
          <TabsTrigger value="movement">Stock Movement</TabsTrigger>
          <TabsTrigger value="performance">Product Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-4">
          <InventoryValueReport />
        </TabsContent>

        <TabsContent value="movement" className="space-y-4">
          <StockMovementReport />
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <ProductPerformanceReport />
        </TabsContent>
      </Tabs>
    </div>
  )
}
