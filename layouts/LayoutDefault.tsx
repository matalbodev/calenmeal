import { Content } from "#root/features/layout/components/Content"
import { Header } from "#root/features/layout/components/Header"
import { NavBar } from "#root/features/layout/components/NavBar"
import { PropsWithChildren, ReactNode } from "react"
import Div100vh from "react-div-100vh";

export { LayoutDefault }

type Props = {
  top?: ReactNode,
  title: string
}

function LayoutDefault(props: PropsWithChildren<Props>) {

  return (
    <Div100vh id="layout">
      <Header title={props.title} />
      {props.top}
      <Content>{props.children}</Content>
      <NavBar />
    </Div100vh>
  );
}