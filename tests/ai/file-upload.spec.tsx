// @vitest-environment jsdom
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  FileUpload,
  FileUploadTrigger,
  FileUploadContent,
} from '@/components/ai/file-upload'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('FileUpload', () => {
  it('renders trigger button', () => {
    render(
      <FileUpload onFilesAdded={() => {}}>
        <FileUploadTrigger>Upload Files</FileUploadTrigger>
      </FileUpload>
    )

    expect(screen.getByRole('button', { name: 'Upload Files' })).toBeInTheDocument()
  })

  it('triggers file input when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(
      <FileUpload onFilesAdded={() => {}}>
        <FileUploadTrigger>Upload Files</FileUploadTrigger>
      </FileUpload>
    )

    const trigger = screen.getByRole('button', { name: 'Upload Files' })
    const input = document.querySelector('input[type="file"]') as HTMLInputElement
    
    const clickSpy = vi.spyOn(input, 'click')
    await user.click(trigger)
    
    expect(clickSpy).toHaveBeenCalled()
  })

  it('calls onFilesAdded when files are selected', async () => {
    const handleFilesAdded = vi.fn()
    render(
      <FileUpload onFilesAdded={handleFilesAdded}>
        <FileUploadTrigger>Upload</FileUploadTrigger>
      </FileUpload>
    )

    const input = document.querySelector('input[type="file"]') as HTMLInputElement
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' })
    
    Object.defineProperty(input, 'files', {
      value: [file],
      writable: false,
    })
    
    fireEvent.change(input)
    
    expect(handleFilesAdded).toHaveBeenCalledWith([file])
  })

  it('supports multiple file selection', async () => {
    const handleFilesAdded = vi.fn()
    render(
      <FileUpload onFilesAdded={handleFilesAdded} multiple>
        <FileUploadTrigger>Upload</FileUploadTrigger>
      </FileUpload>
    )

    const input = document.querySelector('input[type="file"]') as HTMLInputElement
    expect(input).toHaveAttribute('multiple')
  })

  it('supports single file selection', async () => {
    const handleFilesAdded = vi.fn()
    render(
      <FileUpload onFilesAdded={handleFilesAdded} multiple={false}>
        <FileUploadTrigger>Upload</FileUploadTrigger>
      </FileUpload>
    )

    const input = document.querySelector('input[type="file"]') as HTMLInputElement
    expect(input).not.toHaveAttribute('multiple')
  })

  it('respects accept prop', () => {
    render(
      <FileUpload onFilesAdded={() => {}} accept="image/*">
        <FileUploadTrigger>Upload Images</FileUploadTrigger>
      </FileUpload>
    )

    const input = document.querySelector('input[type="file"]') as HTMLInputElement
    expect(input).toHaveAttribute('accept', 'image/*')
  })

  it('respects disabled prop', () => {
    render(
      <FileUpload onFilesAdded={() => {}} disabled>
        <FileUploadTrigger>Upload</FileUploadTrigger>
      </FileUpload>
    )

    const input = document.querySelector('input[type="file"]') as HTMLInputElement
    expect(input).toBeDisabled()
  })

  it('renders FileUploadTrigger as child component with asChild', () => {
    render(
      <FileUpload onFilesAdded={() => {}}>
        <FileUploadTrigger asChild>
          <span>Custom Trigger</span>
        </FileUploadTrigger>
      </FileUpload>
    )

    expect(screen.getByText('Custom Trigger')).toBeInTheDocument()
    expect(screen.getByText('Custom Trigger')).toHaveAttribute('role', 'button')
  })

  it('limits to single file when multiple is false', async () => {
    const handleFilesAdded = vi.fn()
    render(
      <FileUpload onFilesAdded={handleFilesAdded} multiple={false}>
        <FileUploadTrigger>Upload</FileUploadTrigger>
      </FileUpload>
    )

    const input = document.querySelector('input[type="file"]') as HTMLInputElement
    const file1 = new File(['hello1'], 'hello1.txt', { type: 'text/plain' })
    const file2 = new File(['hello2'], 'hello2.txt', { type: 'text/plain' })
    
    Object.defineProperty(input, 'files', {
      value: [file1, file2],
      writable: false,
    })
    
    fireEvent.change(input)
    
    expect(handleFilesAdded).toHaveBeenCalledWith([file1])
  })
})

describe('FileUploadContent', () => {
  // Note: FileUploadContent uses portals and requires drag events to show
  // Testing the portal behavior is complex in JSDOM
  
  it('does not render when not dragging', () => {
    render(
      <FileUpload onFilesAdded={() => {}}>
        <FileUploadTrigger>Upload</FileUploadTrigger>
        <FileUploadContent>
          <div>Drop files here</div>
        </FileUploadContent>
      </FileUpload>
    )

    expect(screen.queryByText('Drop files here')).not.toBeInTheDocument()
  })
})

