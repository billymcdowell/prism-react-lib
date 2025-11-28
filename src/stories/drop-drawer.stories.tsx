import type { Meta, StoryObj } from '@storybook/react';
import {
  DropDrawer,
  DropDrawerContent,
  DropDrawerFooter,
  DropDrawerGroup,
  DropDrawerItem,
  DropDrawerLabel,
  DropDrawerSeparator,
  DropDrawerSub,
  DropDrawerSubContent,
  DropDrawerSubTrigger,
  DropDrawerTrigger,
} from '@/components/ui/dropdrawer';
import { Button } from '@/components/ui/button';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Globe,
  Mic,
  LayoutGrid,
  List,
  Search
} from 'lucide-react';

const meta: Meta<typeof DropDrawer> = {
  title: 'UI/DropDrawer',
  component: DropDrawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropDrawer>;

export const Default: Story = {
  render: (args) => (
    <DropDrawer {...args}>
      <DropDrawerTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropDrawerTrigger>
      <DropDrawerContent>
        <DropDrawerLabel>My Account</DropDrawerLabel>
        <DropDrawerSeparator />
        <DropDrawerGroup>
          <DropDrawerItem icon={<User className="h-4 w-4" />}>
            Profile
            <span className="ml-auto text-xs tracking-widest opacity-60">⇧⌘P</span>
          </DropDrawerItem>
          <DropDrawerItem icon={<CreditCard className="h-4 w-4" />}>
            Billing
            <span className="ml-auto text-xs tracking-widest opacity-60">⌘B</span>
          </DropDrawerItem>
          <DropDrawerItem icon={<Settings className="h-4 w-4" />}>
            Settings
            <span className="ml-auto text-xs tracking-widest opacity-60">⌘S</span>
          </DropDrawerItem>
          <DropDrawerItem icon={<Keyboard className="h-4 w-4" />}>
            Keyboard shortcuts
            <span className="ml-auto text-xs tracking-widest opacity-60">⌘K</span>
          </DropDrawerItem>
        </DropDrawerGroup>
        <DropDrawerSeparator />
        <DropDrawerGroup>
          <DropDrawerItem icon={<Users className="h-4 w-4" />}>
            Team
          </DropDrawerItem>
          <DropDrawerSub>
            <DropDrawerSubTrigger icon={<UserPlus className="h-4 w-4" />}>
              Invite users
            </DropDrawerSubTrigger>
            <DropDrawerSubContent>
              <DropDrawerItem icon={<Mail className="h-4 w-4" />}>
                Email
              </DropDrawerItem>
              <DropDrawerItem icon={<MessageSquare className="h-4 w-4" />}>
                Message
              </DropDrawerItem>
              <DropDrawerSeparator />
              <DropDrawerItem icon={<PlusCircle className="h-4 w-4" />}>
                More...
              </DropDrawerItem>
            </DropDrawerSubContent>
          </DropDrawerSub>
          <DropDrawerItem icon={<Plus className="h-4 w-4" />}>
            New Team
            <span className="ml-auto text-xs tracking-widest opacity-60">⌘+T</span>
          </DropDrawerItem>
        </DropDrawerGroup>
        <DropDrawerSeparator />
        <DropDrawerItem icon={<Github className="h-4 w-4" />}>
          GitHub
        </DropDrawerItem>
        <DropDrawerItem icon={<LifeBuoy className="h-4 w-4" />}>
          Support
        </DropDrawerItem>
        <DropDrawerItem inset>
          Inset Item
        </DropDrawerItem>
        <DropDrawerItem disabled icon={<Cloud className="h-4 w-4" />}>
          API
        </DropDrawerItem>
        <DropDrawerSeparator />
        <DropDrawerItem variant="destructive" icon={<LogOut className="h-4 w-4" />}>
          Log out
          <span className="ml-auto text-xs tracking-widest opacity-60">⇧⌘Q</span>
        </DropDrawerItem>
        <DropDrawerFooter>
          <p className="text-xs text-center text-muted-foreground">
            v1.0.0 - All systems operational
          </p>
        </DropDrawerFooter>
      </DropDrawerContent>
    </DropDrawer>
  ),
};

export const Simple: Story = {
  render: (args) => (
    <DropDrawer {...args}>
      <DropDrawerTrigger asChild>
        <Button variant="outline">Simple Menu</Button>
      </DropDrawerTrigger>
      <DropDrawerContent>
        <DropDrawerItem>Profile</DropDrawerItem>
        <DropDrawerItem>Billing</DropDrawerItem>
        <DropDrawerItem>Settings</DropDrawerItem>
      </DropDrawerContent>
    </DropDrawer>
  ),
};

export const WithFooter: Story = {
  render: (args) => (
    <DropDrawer {...args}>
      <DropDrawerTrigger asChild>
        <Button variant="outline">With Footer</Button>
      </DropDrawerTrigger>
      <DropDrawerContent>
        <DropDrawerItem>Item 1</DropDrawerItem>
        <DropDrawerItem>Item 2</DropDrawerItem>
        <DropDrawerItem>Item 3</DropDrawerItem>
        <DropDrawerFooter className="flex flex-col gap-2">
          <Button variant="outline" size="sm" className="w-full">Cancel</Button>
          <Button size="sm" className="w-full">Save</Button>
        </DropDrawerFooter>
      </DropDrawerContent>
    </DropDrawer>
  ),
};

export const WithNestedSubmenus: Story = {
  render: (args) => (
    <DropDrawer {...args}>
      <DropDrawerTrigger asChild>
        <Button variant="outline">Deep Nesting</Button>
      </DropDrawerTrigger>
      <DropDrawerContent>
        <DropDrawerLabel>Navigation</DropDrawerLabel>
        <DropDrawerSeparator />
        <DropDrawerItem icon={<LayoutGrid className="h-4 w-4" />}>Dashboard</DropDrawerItem>
        <DropDrawerSub>
          <DropDrawerSubTrigger icon={<Globe className="h-4 w-4" />}>
            Region
          </DropDrawerSubTrigger>
          <DropDrawerSubContent>
            <DropDrawerItem>North America</DropDrawerItem>
            <DropDrawerSub>
              <DropDrawerSubTrigger>Europe</DropDrawerSubTrigger>
              <DropDrawerSubContent>
                <DropDrawerItem>Germany</DropDrawerItem>
                <DropDrawerItem>France</DropDrawerItem>
                <DropDrawerItem>UK</DropDrawerItem>
              </DropDrawerSubContent>
            </DropDrawerSub>
            <DropDrawerItem>Asia</DropDrawerItem>
          </DropDrawerSubContent>
        </DropDrawerSub>
        <DropDrawerSub>
          <DropDrawerSubTrigger icon={<Settings className="h-4 w-4" />}>
            Preferences
          </DropDrawerSubTrigger>
          <DropDrawerSubContent>
            <DropDrawerItem icon={<Mic className="h-4 w-4" />}>Voice</DropDrawerItem>
            <DropDrawerItem icon={<List className="h-4 w-4" />}>Display</DropDrawerItem>
            <DropDrawerItem icon={<Search className="h-4 w-4" />}>Search</DropDrawerItem>
          </DropDrawerSubContent>
        </DropDrawerSub>
      </DropDrawerContent>
    </DropDrawer>
  ),
};

