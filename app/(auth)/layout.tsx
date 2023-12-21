const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}
    </div>
  )
}

export default Layout;