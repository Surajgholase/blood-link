import type { Notification } from "./types"

const NOTIFICATIONS_STORAGE_KEY = "bloodsync_notifications"

export function getNotifications(userId: string): Notification[] {
  if (typeof window === "undefined") return []

  const stored = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY)
  if (!stored) return []

  try {
    const allNotifications = JSON.parse(stored) as Notification[]
    return allNotifications
      .filter((n) => n.userId === userId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  } catch {
    return []
  }
}

export function addNotification(notification: Omit<Notification, "id" | "createdAt">): void {
  if (typeof window === "undefined") return

  const stored = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY)
  const notifications = stored ? JSON.parse(stored) : []

  const newNotification: Notification = {
    ...notification,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date(),
  }

  notifications.push(newNotification)
  localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(notifications))
}

export function markAsRead(notificationId: string): void {
  if (typeof window === "undefined") return

  const stored = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY)
  if (!stored) return

  try {
    const notifications = JSON.parse(stored) as Notification[]
    const updated = notifications.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
    localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(updated))
  } catch {
    // Handle error silently
  }
}

export function markAllAsRead(userId: string): void {
  if (typeof window === "undefined") return

  const stored = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY)
  if (!stored) return

  try {
    const notifications = JSON.parse(stored) as Notification[]
    const updated = notifications.map((n) => (n.userId === userId ? { ...n, read: true } : n))
    localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(updated))
  } catch {
    // Handle error silently
  }
}

export function getUnreadCount(userId: string): number {
  const notifications = getNotifications(userId)
  return notifications.filter((n) => !n.read).length
}

// Initialize with some mock notifications
export function initializeMockNotifications(userId: string): void {
  if (typeof window === "undefined") return

  const existing = getNotifications(userId)
  if (existing.length > 0) return // Already initialized

  const mockNotifications: Omit<Notification, "id" | "createdAt">[] = [
    {
      userId,
      type: "match",
      title: "Welcome to Blood Link",
  message: "A recipient with blood type O+ needs your help urgently.",
      read: false,
    },
    {
      userId,
      type: "reminder",
      title: "Donation Reminder",
      message: "You're eligible to donate again. Schedule your next donation today.",
      read: false,
    },
    {
      userId,
      type: "alert",
      title: "Critical Blood Shortage",
      message: "There's a critical shortage of O- blood in your area.",
      read: true,
    },
  ]

  mockNotifications.forEach((notification) => addNotification(notification))
}
