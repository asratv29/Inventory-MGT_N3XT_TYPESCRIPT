import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivity() {
  // This would typically come from your database
  const activities = [
    {
      id: 1,
      user: { name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
      action: "added 50 units of",
      item: "Wireless Headphones",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      user: { name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
      action: "updated price for",
      item: "Smartphone Case",
      timestamp: "3 hours ago",
    },
    {
      id: 3,
      user: { name: "Mike Johnson", avatar: "/placeholder.svg?height=32&width=32" },
      action: "removed 10 units of",
      item: "USB-C Cable",
      timestamp: "5 hours ago",
    },
    {
      id: 4,
      user: { name: "Sarah Williams", avatar: "/placeholder.svg?height=32&width=32" },
      action: "created new product",
      item: "Bluetooth Speaker",
      timestamp: "Yesterday",
    },
    {
      id: 5,
      user: { name: "David Brown", avatar: "/placeholder.svg?height=32&width=32" },
      action: "updated category for",
      item: "Laptop Sleeve",
      timestamp: "Yesterday",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions in the inventory system</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span> {activity.action}{" "}
                  <span className="font-semibold">{activity.item}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
