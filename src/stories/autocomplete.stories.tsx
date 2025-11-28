import type { Meta, StoryObj } from '@storybook/react';
import { AutoComplete, type Option } from '@/components/ui/autocomplete';
import { useState, useEffect } from "react";
import { Button } from '@/components/ui/button';

const meta: Meta<typeof AutoComplete> = {
  title: 'UI/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
    },
    emptyMessage: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    value: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

const FRAMEWORKS = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "wordpress",
    label: "WordPress",
  },
  {
    value: "express.js",
    label: "Express.js",
  },
  {
    value: "nest.js",
    label: "Nest.js",
  },
]

function AutocompleteExample() {
  const [isLoading, setLoading] = useState(false)
  const [isDisabled, setDisbled] = useState(false)
  const [value, setValue] = useState<Option>()

  return (
    <div className="not-prose mt-8 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          onClick={() => setLoading((prev) => !prev)}
        >
          Toggle loading
        </Button>
        <Button
          type="button"
          onClick={() => setDisbled((prev) => !prev)}
        >
          Toggle disabled
        </Button>
      </div>
      <AutoComplete
        options={FRAMEWORKS}
        emptyMessage="No results."
        placeholder="Find something"
        isLoading={isLoading}
        onValueChange={setValue}
        value={value}
        disabled={isDisabled}
      />
      <span className="text-sm">
        Current value: {value ? value?.label : "No value selected"}
      </span>
      <span className="text-sm">
        Loading state: {isLoading ? "true" : "false"}
      </span>
      <span className="text-sm">Disabled: {isDisabled ? "true" : "false"}</span>
    </div>
  )
}

function AutocompleteRemoteExample() {
  const [isLoading, setLoading] = useState(false)
  const [value, setValue] = useState<Option>()
  const [options, setOptions] = useState<Option[]>([])

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setOptions(
          data.map((post: any) => ({
            value: post.id.toString(),
            label: post.title,
          }))
        )
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="not-prose mt-8 flex flex-col gap-4">
      <AutoComplete
        options={options}
        emptyMessage="No results."
        placeholder="Search posts..."
        isLoading={isLoading}
        onValueChange={setValue}
        value={value}
      />
      <span className="text-sm">
        Current value: {value ? value?.label : "No value selected"}
      </span>
    </div>
  )
}

export const Example: Story = {
  render: () => <AutocompleteExample />,
};

export const Remote: Story = {
  render: () => <AutocompleteRemoteExample />,
};
