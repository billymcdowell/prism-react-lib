// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

function FormTest() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  )
}

describe('Form', () => {
  it('renders form fields', () => {
    render(<FormTest />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('shadcn')).toBeInTheDocument()
    expect(screen.getByText('This is your public display name.')).toBeInTheDocument()
  })

  it('displays validation error', async () => {
    const user = userEvent.setup()
    render(<FormTest />)

    const submit = screen.getByText('Submit')
    await user.click(submit)

    expect(await screen.findByText('Username must be at least 2 characters.')).toBeVisible()
  })
})
