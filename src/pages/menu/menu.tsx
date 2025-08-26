import {
  Button,
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


export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show navigation</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="MENU" titleIcon={() => <></>} />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
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
                      Dashboard
                    </SidebarItem>
                    <SidebarItem href="/e-commerce/products" >
                      Products
                    </SidebarItem>
                    <SidebarItem href="/users/list" >
                      Users list
                    </SidebarItem>
                    <SidebarItem href="/authentication/sign-in" >
                      Sign in
                    </SidebarItem>
                    <SidebarItem href="/authentication/sign-up" >
                      Sign up
                    </SidebarItem>
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <SidebarItem href="https://github.com/themesberg/flowbite-react/" >
                      Docs
                    </SidebarItem>
                    <SidebarItem href="https://flowbite-react.com/" >
                      Components
                    </SidebarItem>
                    <SidebarItem href="https://github.com/themesberg/flowbite-react/issues" >
                      Help
                    </SidebarItem>
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
