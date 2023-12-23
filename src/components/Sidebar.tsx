"use client"

import { block } from "million/react"
import Button from "./Forms/Button"
import ChevronDown from "./Icons/ChevronDown"
import Input from "./Forms/Input"
import Image from "next/image"

const Sidebar = block(() => {
  return (
    <aside className="flex flex-col h-screen px-3 py-6 border-r border-neutral-800">
      <Button
        theme="transparent"
        className="flex flex-row items-center gap-x-2.5 w-full text-2xl"
      >
        <ChevronDown strokeWidth={2.5} />
        <Image src="/popcat.jpg" width={1024} height={1024} alt="Img" className="object-contain h-8 w-8 rounded-full" />
        Dary
      </Button>
      <div className="py-1"></div>

      <Input placeholder="Search"></Input>
    </aside>
  )
})

export default Sidebar
