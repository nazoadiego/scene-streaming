import Header from './Header'

const Layout = ({ children }: any) => {
  return (
    <main className="min-h-screen px-20 py-2">
      <div className="py-4">
        <Header />
      </div>
      {children}
    </main>
  )
}

export default Layout
