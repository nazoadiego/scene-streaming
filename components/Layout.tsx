import Header from './Header'

const Layout = ({ children }: any) => {
  return (
    <main className="min-h-screen bg-[#101010] px-20 py-2 text-white">
      <div className="py-4">
        <Header />
      </div>
      {children}
    </main>
  )
}

export default Layout
