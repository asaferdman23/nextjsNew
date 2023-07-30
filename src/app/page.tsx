import Image from 'next/image'
import DashboardIntilize from './Components/Dashboard/DashboardIntilize'
import Header from './Components/Header/Header'
import SideMenu from './Components/SideMenu/SideMenu'

export default function Home() {
  return (
    <main>
      <head>
          <title>Iot project</title>
        </head>
      <div>
      <Header/>
      <SideMenu/>
      <DashboardIntilize/>
      </div>
    </main>
  )
}
