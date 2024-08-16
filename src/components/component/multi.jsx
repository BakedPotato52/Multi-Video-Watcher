"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import ReactPlayer from "react-player"

export function Multi() {
  const [videoUrl, setVideoUrl] = useState('')
  const [displayMode, setDisplayMode] = useState(4)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleDisplayModeChange = (mode) => {
    setDisplayMode(mode)
  }

  const handleVideoUrlChange = (url) => {
    setVideoUrl(url)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl  font-bold">Multi-Video Watcher</h1>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Display Mode:</span>
          <Button
            variant={displayMode === 2 ? "solid" : "outline"}
            onClick={() => handleDisplayModeChange(2)}
            className="px-3 py-1 text-sm">
            2
          </Button>
          <Button
            variant={displayMode === 4 ? "solid" : "outline"}
            onClick={() => handleDisplayModeChange(4)}
            className="px-3 py-1 text-sm">
            4
          </Button>
          <Button
            variant={displayMode === 6 ? "solid" : "outline"}
            onClick={() => handleDisplayModeChange(6)}
            className="px-3 py-1 text-sm">
            6
          </Button>
          <Button
            variant={displayMode === 8 ? "solid" : "outline"}
            onClick={() => handleDisplayModeChange(8)}
            className="px-3 py-1 text-sm">
            8
          </Button>
        </div>
      </div>
      <Input
        type="text"
        value={videoUrl}
        onChange={(e) => handleVideoUrlChange(e.target.value)}
        placeholder="Enter video URL"
        className="w-full max-w-[400px] rounded-md bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
      <div
        className={`grid gap-4 ${displayMode === 2
          ? "sm:grid-cols-2"
          : displayMode === 4
            ? "sm:grid-cols-2 md:grid-cols-2"
            : displayMode === 6
              ? "sm:grid-cols-2 md:grid-cols-3"
              : "sm:grid-cols-2 md:grid-cols-4"
          }`}>
        {isMounted && Array.from({ length: displayMode }).map((_, index) => (
          <div key={index} className="aspect-video overflow-hidden rounded-lg">
            <ReactPlayer
              url={videoUrl}
              playing
              muted
              controls
              width="100%"
              height="100%"
              className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
