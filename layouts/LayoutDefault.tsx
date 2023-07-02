import { Content } from "#root/components/layout/Content"
import { Header } from "#root/components/layout/Header"
import { NavBar } from "#root/components/layout/NavBar"
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