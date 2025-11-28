import { Drawer, DrawerContent, DrawerFooter, DrawerTitle, DrawerTrigger } from './drawer';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './dropdown-menu';
import * as React from "react";
declare function DropDrawer({ children, ...props }: React.ComponentProps<typeof Drawer> | React.ComponentProps<typeof DropdownMenu>): import("react/jsx-runtime").JSX.Element;
declare function DropDrawerTrigger({ className, children, ...props }: React.ComponentProps<typeof DrawerTrigger> | React.ComponentProps<typeof DropdownMenuTrigger>): import("react/jsx-runtime").JSX.Element;
declare function DropDrawerContent({ className, children, ...props }: React.ComponentProps<typeof DrawerContent> | React.ComponentProps<typeof DropdownMenuContent>): import("react/jsx-runtime").JSX.Element;
declare function DropDrawerItem({ className, children, onSelect, onClick, icon, variant, inset, disabled, ...props }: React.ComponentProps<typeof DropdownMenuItem> & {
    icon?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function DropDrawerSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuSeparator>): import("react/jsx-runtime").JSX.Element | null;
declare function DropDrawerLabel({ className, children, ...props }: React.ComponentProps<typeof DropdownMenuLabel> | React.ComponentProps<typeof DrawerTitle>): import("react/jsx-runtime").JSX.Element;
declare function DropDrawerFooter({ className, children, ...props }: React.ComponentProps<typeof DrawerFooter> | React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function DropDrawerGroup({ className, children, ...props }: React.ComponentProps<"div"> & {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function DropDrawerSub({ children, id, ...props }: React.ComponentProps<typeof DropdownMenuSub> & {
    id?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function DropDrawerSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof DropdownMenuSubTrigger> & {
    icon?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function DropDrawerSubContent({ className, sideOffset, children, ...props }: React.ComponentProps<typeof DropdownMenuSubContent>): import("react/jsx-runtime").JSX.Element | null;
export { DropDrawer, DropDrawerContent, DropDrawerFooter, DropDrawerGroup, DropDrawerItem, DropDrawerLabel, DropDrawerSeparator, DropDrawerSub, DropDrawerSubContent, DropDrawerSubTrigger, DropDrawerTrigger, };
