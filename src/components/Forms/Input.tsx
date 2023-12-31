import { block } from "million/react"
import { twMerge } from "tailwind-merge"

const Input = block(
  (props: React.ComponentProps<"input">) => {
    return (
      <input
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        className={twMerge("bg-neutral-900 rounded-lg px-3 py-1 border border-neutral-800 focus:outline-0", props.className)}
      />
    )
  },
  { as: "input" },
)

export default Input
