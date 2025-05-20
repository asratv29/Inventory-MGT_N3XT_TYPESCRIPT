"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Box,
  Layers,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocalStorage } from "@/hooks/use-local-storage"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/products", icon: Package },
  { name: "Categories", href: "/categories", icon: Tag },
  { name: "Stock", href: "/stock", icon: Box },
  { name: "Orders", href: "/orders", icon: ShoppingCart },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Suppliers", href: "/suppliers", icon: Layers },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useLocalStorage<boolean>("sidebarCollapsed", false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div
      className={cn(
        "hidden md:block md:fixed md:inset-y-0 z-10 transition-all duration-300 ease-in-out",
        collapsed ? "md:w-20" : "md:w-64",
      )}
    >
      <div className="flex flex-col flex-1 h-full bg-background border-r">
        <div
          className={cn(
            "flex items-center h-16 flex-shrink-0 px-4 border-b",
            collapsed ? "justify-center" : "justify-between",
          )}
        >
          {!collapsed && <h1 className="text-lg font-semibold">Inventory</h1>}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-8 w-8"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  pathname === item.href
                    ? "bg-muted text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted/50",
                  "group flex items-center px-2 py-2 text-sm rounded-md",
                  collapsed ? "justify-center" : "",
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon
                  className={cn(
                    pathname === item.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                    "flex-shrink-0 h-5 w-5",
                    collapsed ? "" : "mr-3",
                  )}
                  aria-hidden="true"
                />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
