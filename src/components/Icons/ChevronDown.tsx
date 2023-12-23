import { twMerge } from "tailwind-merge"

const ChevronDown: React.FC<React.ComponentProps<"svg">> = ((props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
      className={twMerge("w-6 h-6", props.className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
})

export default ChevronDown
