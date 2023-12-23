"use client"

import { block } from "million/react"
import Button from "./Forms/Button"
import ChevronDown from "./Icons/ChevronDown"
import Input from "./Forms/Input"
import Image from "next/image"
import MagnifyingGlass from "./Icons/MagnifyingGlass"
import Envelop from "./Icons/Envelop"
import { twMerge } from "tailwind-merge"
import Newspaper from "./Icons/Newspaper"
import BookOpen from "./Icons/BookOpen"
import CalendarIcon from "./Icons/Calendar"

const SidebarLinkItem = (props: React.ComponentProps<"a">) => {
  return (
    <a
      {...props}
      className={twMerge(
        "flex flex-row items-center gap-x-2 transition duration-200 hover:bg-neutral-400/20 rounded-lg px-3 py-1.5 cursor-pointer",
        props.className,
      )}
    >
      {props.children}
    </a>
  )
}

const Sidebar = block(() => {
  return (
    <aside className="flex flex-col h-screen px-5 py-6 border-r border-neutral-800">
      <Button
        theme="transparent"
        className="flex flex-row items-center gap-x-2.5 w-full text-2xl px-2.5"
      >
        <ChevronDown strokeWidth={2.5} />
        <Image
          src="/popcat.jpg"
          width={1024}
          height={1024}
          alt="Img"
          className="object-contain h-8 w-8 rounded-full"
        />
        Dary
      </Button>

      <div className="py-4"></div>

      <div className="relative">
        <MagnifyingGlass className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4" />
        <Input placeholder="Search"></Input>
      </div>

      <div className="py-3"></div>

      <div className="flex flex-col gap-y-2.5">
        <SidebarLinkItem>
          <Envelop className="h-6 w-6" />
          <p>Messages</p>
        </SidebarLinkItem>
        <SidebarLinkItem>
          <Newspaper className="h-6 w-6" />
          <p>Issues</p>
        </SidebarLinkItem>
        <SidebarLinkItem>
          <BookOpen className="h-6 w-6" />
          <p>My Notes</p>
        </SidebarLinkItem>
        <SidebarLinkItem>
          <CalendarIcon className="h-6 w-6" />
          <p>Calendar</p>
        </SidebarLinkItem>
      </div>
    </aside>
  )
})

export default Sidebar
