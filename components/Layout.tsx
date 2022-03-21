import Header from './Header/Header'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-16 pb-6">{children}</main>
    </>
  )
}

export default Layout
