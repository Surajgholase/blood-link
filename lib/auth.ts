import type { User, UserRole } from "./types"

const AUTH_STORAGE_KEY = "bloodlink_auth"
const USER_STORAGE_KEY = "bloodlink_user"

export interface AuthSession {
  user: User
  token: string
  expiresAt: Date
}

export function setAuthSession(session: AuthSession): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session))
  }
}

export function getAuthSession(): AuthSession | null {
  if (typeof window === "undefined") return null

  const stored = localStorage.getItem(AUTH_STORAGE_KEY)
  if (!stored) return null

  try {
    const session = JSON.parse(stored) as AuthSession
    // Check if session is expired
    if (new Date(session.expiresAt) < new Date()) {
      clearAuthSession()
      return null
    }
    return session
  } catch {
    return null
  }
}

export function clearAuthSession(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    localStorage.removeItem(USER_STORAGE_KEY)
  }
}

export function isAuthenticated(): boolean {
  return getAuthSession() !== null
}

export function getCurrentUser(): User | null {
  const session = getAuthSession()
  return session?.user || null
}

// Mock authentication functions
export async function login(
  email: string,
  password: string,
): Promise<{ success: boolean; session?: AuthSession; error?: string }> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Mock validation
  if (!email || !password) {
    return { success: false, error: "Email and password are required" }
  }

  // Create mock session
  const mockUser: User = {
    id: Math.random().toString(36).substr(2, 9),
    email,
    name: email.split("@")[0],
    phone: "(555) 123-4567",
    role: "donor",
    createdAt: new Date(),
  }

  const session: AuthSession = {
    user: mockUser,
    token: Math.random().toString(36).substr(2),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  }

  setAuthSession(session)

  return { success: true, session }
}

export async function register(
  email: string,
  password: string,
  name: string,
  phone: string,
  role: UserRole,
): Promise<{ success: boolean; session?: AuthSession; error?: string }> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Mock validation
  if (!email || !password || !name || !phone) {
    return { success: false, error: "All fields are required" }
  }

  // Create mock user
  const mockUser: User = {
    id: Math.random().toString(36).substr(2, 9),
    email,
    name,
    phone,
    role,
    createdAt: new Date(),
  }

  const session: AuthSession = {
    user: mockUser,
    token: Math.random().toString(36).substr(2),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
  }

  setAuthSession(session)

  return { success: true, session }
}

export function logout(): void {
  clearAuthSession()
}
