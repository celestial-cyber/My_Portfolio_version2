"use client"

import type React from "react"

export default function ProjectWrapper({ children, fallbackProps, loadingTimeout = 8000 }: any) {
  // This wrapper maintains the original interface but doesn't add loading states
  // since the projects section now handles its own loading/error states
  return <>{children}</>;
}