# Prism React Lib

A modern, accessible, and beautiful React component library built with TypeScript and Tailwind CSS.

## Installation

Install the package using your preferred package manager:

```bash
npm install prism-react-lib
# or
yarn add prism-react-lib
# or
pnpm add prism-react-lib
```

## Setup

### 1. Import Styles

To use the components correctly, you must import the CSS file at the root of your application (e.g., in `main.tsx`, `App.tsx`, or `layout.tsx`):

```tsx
import 'prism-react-lib/styles.css';
```

### 2. Usage Example

Import and use components in your React application:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from 'prism-react-lib';

function App() {
  return (
    <div className="p-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Deploy</Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## Features

- 🎨 **Modern Design**: Beautifully designed components out of the box.
- 🌙 **Dark Mode**: Built-in dark mode support using standard CSS variables.
- ♿ **Accessible**: Built on top of Radix UI primitives for robustness and accessibility.
- 🔧 **TypeScript**: Fully typed for excellent developer experience.
- ⚡ **Vite & Tailwind**: Optimized for performance.

## Components

This library includes a comprehensive set of UI components:

- **Core**: Button, Badge, Card, Separator, Skeleton
- **Inputs**: Input, Textarea, Checkbox, RadioGroup, Select, Switch, Slider, Form
- **Feedback**: Alert, Progress, Spinner, Sonner (Toast), Tooltip
- **Overlay**: Dialog, Drawer, Sheet, Popover, AlertDialog, ContextMenu, DropdownMenu
- **Navigation**: Breadcrumb, Menubar, NavigationMenu, Pagination, Tabs, Sidebar
- **Data Display**: Avatar, Table, Calendar, Chart, Carousel, Accordion, ScrollArea
- **Layout**: AspectRatio, Resizable, Collapsible

## Theming

The library uses CSS variables (oklch color space) for theming. You can customize the look and feel by overriding these variables in your global CSS.

```css
:root {
  /* Override primary color */
  --primary: oklch(0.4 0.15 250);
  --primary-foreground: oklch(1 0 0);
  
  /* Override radius */
  --radius: 0.5rem;
}
```

## License

ISC
