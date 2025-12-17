"use client";
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'
import Button from './Button';

interface DropzoneProps {
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const Dropzone = ({ setItems }: DropzoneProps) => {

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles) {
      acceptedFiles.forEach(file => {
        const objectUrl = URL.createObjectURL(file);
        setItems((prev: string[]) => [...prev, objectUrl]);

        return () => {
          URL.revokeObjectURL(objectUrl);
        };
      })
    }
  }, [setItems])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: { 'image/*': [] }, onDrop, maxFiles: 8 })
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ? (
          <div className='flex items-center justify-between gap-2 w-full min-w-md'>
            <p className="text-xs text-muted-foreground border border-muted-foreground/20 rounded-md px-5 py-2.5 flex-1">Drag your files here</p>
            <Button size="sm" className='px-6'>Upload</Button>
          </div>
        ) : (
          <div className='flex items-center justify-between gap-2 w-full min-w-md'>
            <p className="text-xs text-muted-foreground border border-muted-foreground/20 rounded-md px-5 py-2.5 flex-1">Drag & drop or click here to upload the files</p>
            <Button size="sm" className='px-6'>Upload</Button>
          </div>
        )
      }
    </div>
  )
}

export default Dropzone