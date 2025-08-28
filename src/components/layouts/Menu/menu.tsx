
import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

import CurrentCharacterProgression from "./currentCharacterProgression/currentCharacterProgression";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex bg-gray-500">        
        <svg className= 'w-8 ml-5 hover:bg-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" onClick={()=>setIsOpen(true)}><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
        <CurrentCharacterProgression />
      </div>

      {/* Drawer menu */}
      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="MENU" titleIcon={() => <></>} />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput  type="search" placeholder="Search" required size={32} />
                </form>
                <SidebarItems>
                  <SidebarItemGroup>
                    <SidebarItem href="/" >
                      Home
                    </SidebarItem>
                    <SidebarItem href="/characters" >
                      Characters
                    </SidebarItem>
                    <SidebarItem href="/e-commerce/products" >
                      Products
                    </SidebarItem>

                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <SidebarItem href="https://github.com/themesberg/flowbite-react/" >
                      Docs
                    </SidebarItem>
                    {/* <SidebarItem href="https://flowbite-react.com/" >
                      Components
                    </SidebarItem>
                    <SidebarItem href="https://github.com/themesberg/flowbite-react/issues" >
                      Help
                    </SidebarItem> */}
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
