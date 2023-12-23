import { block } from "million/react"

const Label = block((props: { htmlFor: string, children: React.ReactNode }) => {
  return <label htmlFor={props.htmlFor ?? ""}>{props.children}</label>
})

export default Label