// src/components/ThemeToggle.tsx
"use client"
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = (props:any) => {
    const { style } = props;
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Button
            variant='ghost'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            // className="bg-gray-800 text-white p-4 py-2 rounded"
            style={style || {}}
        >
            { theme === 'dark' ? <MoonIcon /> : <SunIcon /> }
        </Button>
    )
}

export default ThemeToggle