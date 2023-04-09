"use client";

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    // enableSystem sets system theme
    <ThemeProvider enableSystem={true} attribute='class'> 
      {children}
    </ThemeProvider>
  )
}
