import { block } from "million/react"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

const BUTTON_THEMES = {
  primary: "text-black bg-white hover:bg-neutral-200",
  transparent: "text-white bg-transparent hover:bg-neutral-50/10",
}

type BlockProps = React.ComponentProps<"button"> & {
  theme?: keyof typeof BUTTON_THEMES
}

const Button: FC<BlockProps> = (props) => {
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={twMerge(
        BUTTON_THEMES[props.theme ?? "primary"] ?? "",
        "px-4 py-1.5 rounded-lg transition duration-200 font-semibold text-lg",
        props.className,
      )}
    >
      {props.children}
    </button>
  )
}

export default Button
