"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface LiveSearchProps {
  placeholder?: string
  onSearch?: (value: string) => void
  onClose?: () => void
  initialValue?: string
  className?: string
}

export function LiveSearch({
  placeholder = "Search...",
  onSearch,
  onClose,
  initialValue = "",
  className,
}: LiveSearchProps) {
  const [searchTerm, setSearchTerm] = useState(initialValue)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus the input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Handle search as user types
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (onSearch) {
        onSearch(searchTerm)
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm, onSearch])

  // Handle key press events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape" && onClose) {
      onClose()
    }
  }

  return (
    <div className="relative w-full">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={onClose}
        className={`w-full pl-8 ${className}`}
        autoComplete="off"
      />
    </div>
  )
}
