import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
