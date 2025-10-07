"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { BloodType } from "@/lib/types"
import { Loader2 } from "lucide-react"

export function BloodRequestForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    bloodType: "" as BloodType,
    unitsNeeded: "1",
    urgencyLevel: "moderate" as "critical" | "urgent" | "moderate",
    hospital: "",
    city: "",
    state: "",
    reason: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.bloodType) {
      setError("Please select blood type")
      return
    }

    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Save request to localStorage
    if (typeof window !== "undefined") {
      const requests = JSON.parse(localStorage.getItem("blood_requests") || "[]")
      const newRequest = {
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
        unitsNeeded: Number.parseInt(formData.unitsNeeded),
        requestDate: new Date().toISOString(),
        status: "open",
      }
      requests.push(newRequest)
      localStorage.setItem("blood_requests", JSON.stringify(requests))
    }

    router.push("/recipient/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="bloodType">Blood Type Needed *</Label>
          <Select
            value={formData.bloodType}
            onValueChange={(value) => setFormData({ ...formData, bloodType: value as BloodType })}
            disabled={loading}
          >
            <SelectTrigger id="bloodType">
              <SelectValue placeholder="Select blood type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A+">A+</SelectItem>
              <SelectItem value="A-">A-</SelectItem>
              <SelectItem value="B+">B+</SelectItem>
              <SelectItem value="B-">B-</SelectItem>
              <SelectItem value="AB+">AB+</SelectItem>
              <SelectItem value="AB-">AB-</SelectItem>
              <SelectItem value="O+">O+</SelectItem>
              <SelectItem value="O-">O-</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="unitsNeeded">Units Needed *</Label>
          <Input
            id="unitsNeeded"
            type="number"
            min="1"
            max="10"
            value={formData.unitsNeeded}
            onChange={(e) => setFormData({ ...formData, unitsNeeded: e.target.value })}
            required
            disabled={loading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="urgencyLevel">Urgency Level *</Label>
        <Select
          value={formData.urgencyLevel}
          onValueChange={(value) =>
            setFormData({ ...formData, urgencyLevel: value as "critical" | "urgent" | "moderate" })
          }
          disabled={loading}
        >
          <SelectTrigger id="urgencyLevel">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="critical">Critical - Immediate need</SelectItem>
            <SelectItem value="urgent">Urgent - Within 24 hours</SelectItem>
            <SelectItem value="moderate">Moderate - Within a week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hospital">Hospital/Medical Facility *</Label>
        <Input
          id="hospital"
          type="text"
          placeholder="City General Hospital"
          value={formData.hospital}
          onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
          required
          disabled={loading}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            type="text"
            placeholder="San Francisco"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">State *</Label>
          <Input
            id="state"
            type="text"
            placeholder="CA"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            required
            disabled={loading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reason">Reason for Request (Optional)</Label>
        <Textarea
          id="reason"
          placeholder="Brief description of medical need..."
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          rows={4}
          disabled={loading}
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting request...
          </>
        ) : (
          "Submit Blood Request"
        )}
      </Button>
    </form>
  )
}
