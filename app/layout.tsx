import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IntakeFlow — Client Intake Without the Wait',
  description:
    'Automate your entire client intake process. A form submission triggers lead logging, Calendly booking, Gmail confirmation, and Slack alert — in seconds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
