"use client";
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import Button from './Button';
import { setTimeout } from 'timers';

export interface imageObjectType {
  id: string;
  img: string;
};
interface DropzoneProps {
  images: imageObjectType[];
  setItems: React.Dispatch<React.SetStateAction<imageObjectType[]>>;
  disabled?: boolean;
}

const MAX_FILES = 8;

const Dropzone = ({ images, setItems, disabled = false }: DropzoneProps) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (disabled || images.length > MAX_FILES || acceptedFiles.length + images.length > MAX_FILES) {
      setError(`Only upto ${MAX_FILES} can be uploaded`);
      return;
    }
    setError(null);

    if (acceptedFiles) {
      acceptedFiles.forEach(file => {
        const objectUrl = URL.createObjectURL(file);
        const imgObj = {
          id: crypto.randomUUID(),
          img: objectUrl
        };
        setItems((prev: imageObjectType[]) => [...prev, imgObj]);

        return () => {
          URL.revokeObjectURL(objectUrl);
        };
      })
    }
  }, [setItems, disabled, images])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: { 'image/*': [] }, onDrop })

  return (
    <div {...getRootProps()}>
      {
        error && <p className="text-center text-red-500 text-xs mb-1">{error}</p>
      }
      <input
        {...getInputProps()}
        className="cursor-crosshair"
        disabled={disabled}
        title={disabled ? "Only 8 images allowed" : "Drag or click to upload image"}
        aria-label="Dropzone for uploading images"
      />
      {
        isDragActive ? (
          <div className='flex items-center justify-between gap-2 w-full min-w-xs max-w-2xl'>
            <p
              className={`text-xs text-muted-foreground border border-muted-foreground/20 rounded-md px-5 py-2.5 flex-1 ${disabled && 'bg-muted-foreground/10 cursor-not-allowed'}`}
            >
              Drag your files here
            </p>
            <Button size="sm" className='px-6' variant={`${disabled ? 'disabled' : 'default'}`}>Upload</Button>
          </div>
        ) : (
          <div className='flex items-center justify-between gap-2 w-full min-w-xs max-w-2xl'>
            <p
              className={`text-xs text-muted-foreground border border-muted-foreground/20 rounded-md px-5 py-2.5 flex-1 ${disabled && 'bg-muted-foreground/10 cursor-not-allowed'}`}
            >
              Drag & drop or click here to upload the files
            </p>
            <Button size="sm" className='px-6' variant={`${disabled ? 'disabled' : 'default'}`}>Upload</Button>
          </div>
        )
      }
    </div>
  )
}

export default Dropzone
