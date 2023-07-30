import Image from 'next/image'
import DashboardIntilize from './Components/Dashboard/DashboardIntilize'
import Header from './Components/Header/Header'
import SideMenu from './Components/SideMenu/SideMenu'
import { theme } from './Theme'

export default function Home() {
  const {colors } = theme;
  return (
    <main>
      <head>
          <title>Iot project</title>
        </head>
      <div style={{ backgroundColor: colors.gray, color: colors.white, padding: "20px" }}>
      <Header/>
      <SideMenu/>
      <DashboardIntilize/>
      </div>
    </main>
  )
}
