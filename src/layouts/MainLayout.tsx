import React from 'react'
interface MainLayoutProps {
  children: React.ReactNode;
}
function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {children}
        </div>
    </div>
  )
}

export default MainLayout