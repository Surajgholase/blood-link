"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { BloodInventory, BloodType } from "@/lib/types"
import { Plus, Minus, AlertTriangle } from "lucide-react"

interface InventoryManagementProps {
  inventory: BloodInventory[]
}

export function InventoryManagement({ inventory: initialInventory }: InventoryManagementProps) {
  const [inventory, setInventory] = useState(initialInventory)
  const [editingType, setEditingType] = useState<BloodType | null>(null)
  const [newValue, setNewValue] = useState("")

  const getStockStatus = (units: number) => {
    if (units < 10) return { status: "critical", color: "text-red-600 bg-red-50 dark:bg-red-950/20" }
    if (units < 30) return { status: "low", color: "text-amber-600 bg-amber-50 dark:bg-amber-950/20" }
    return { status: "good", color: "text-green-600 bg-green-50 dark:bg-green-950/20" }
  }

  const handleUpdate = (bloodType: BloodType, change: number) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.bloodType === bloodType
          ? { ...item, unitsAvailable: Math.max(0, item.unitsAvailable + change), lastUpdated: new Date() }
          : item,
      ),
    )
  }

  const handleSetValue = (bloodType: BloodType) => {
    const value = Number.parseInt(newValue)
    if (!Number.isNaN(value) && value >= 0) {
      setInventory((prev) =>
        prev.map((item) =>
          item.bloodType === bloodType ? { ...item, unitsAvailable: value, lastUpdated: new Date() } : item,
        ),
      )
    }
    setEditingType(null)
    setNewValue("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Management</CardTitle>
        <CardDescription>Update blood stock levels in real-time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {inventory.map((item) => {
            const stockStatus = getStockStatus(item.unitsAvailable)
            const isEditing = editingType === item.bloodType

            return (
              <div
                key={item.bloodType}
                className={`flex items-center justify-between p-4 rounded-lg border ${stockStatus.color}`}
              >
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="font-mono text-base px-3 py-1">
                    {item.bloodType}
                  </Badge>
                  {item.unitsAvailable < 10 && <AlertTriangle className="h-5 w-5 text-red-600" />}
                </div>

                <div className="flex items-center gap-3">
                  {isEditing ? (
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        min="0"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                        className="w-20 h-9"
                        autoFocus
                      />
                      <Button size="sm" onClick={() => handleSetValue(item.bloodType)}>
                        Save
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setEditingType(null)}>
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleUpdate(item.bloodType, -1)}
                        disabled={item.unitsAvailable === 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <button
                        onClick={() => {
                          setEditingType(item.bloodType)
                          setNewValue(item.unitsAvailable.toString())
                        }}
                        className="text-2xl font-bold text-foreground min-w-[60px] text-center hover:text-primary transition-colors"
                      >
                        {item.unitsAvailable}
                      </button>
                      <Button size="sm" variant="outline" onClick={() => handleUpdate(item.bloodType, 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
