// src/hooks/use-mobile.ts
import { useState, useEffect } from "react"

// Hook để kiểm tra thiết bị di động
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768) // Bạn có thể thay đổi giá trị này tùy theo yêu cầu
    }

    checkMobile() // Kiểm tra ngay khi component mount

    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile) // Cleanup khi component unmount
  }, [])

  return isMobile
}
