export type BloodType = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-"

export type UserRole = "donor" | "recipient" | "blood_bank" | "admin"

export interface User {
  id: string
  email: string
  name: string
  phone: string
  role: UserRole
  createdAt: Date
}

export interface Donor extends User {
  role: "donor"
  bloodType: BloodType
  dateOfBirth: Date
  address: string
  city: string
  state: string
  zipCode: string
  lastDonationDate?: Date
  medicalHistory?: string
  isEligible: boolean
  totalDonations: number
}

export interface Recipient extends User {
  role: "recipient"
  bloodType: BloodType
  urgencyLevel: "critical" | "urgent" | "moderate"
  unitsNeeded: number
  hospital: string
  requestDate: Date
  status: "pending" | "matched" | "fulfilled" | "cancelled"
}

export interface BloodBank {
  id: string
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  email: string
  latitude: number
  longitude: number
  operatingHours: string
  inventory: BloodInventory[]
}

export interface BloodInventory {
  bloodType: BloodType
  unitsAvailable: number
  lastUpdated: Date
}

export interface DonationRequest {
  id: string
  recipientId: string
  recipientName: string
  bloodType: BloodType
  unitsNeeded: number
  urgencyLevel: "critical" | "urgent" | "moderate"
  hospital: string
  city: string
  state: string
  requestDate: Date
  status: "open" | "matched" | "fulfilled" | "cancelled"
  matchedDonorId?: string
}

export interface Notification {
  id: string
  userId: string
  type: "match" | "reminder" | "alert" | "confirmation"
  title: string
  message: string
  read: boolean
  createdAt: Date
}
