import { Header } from "../../components/Header";
import { Outlet } from 'react-router-dom'

export function DafaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
