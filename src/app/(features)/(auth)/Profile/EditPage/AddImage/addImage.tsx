"use client";

import { ChangeEvent, useRef } from "react";
import Image from "next/image";

interface AddImageProps {
    imageUrl: string | null;
    setImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function AddImage({ imageUrl, setImageUrl }: AddImageProps) {
    const imageInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const newImageUrl = URL.createObjectURL(file);

            setImageUrl(newImageUrl);
        }
    };

    return (
        <div>
            <input
                type="file"
                hidden
                ref={imageInputRef}
                onChange={handleImageChange}
            />
            <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
            >
                Wybierz zdjęcie
            </button>
            <button type="button" onClick={() => setImageUrl(null)}>
                Usuń
            </button>
            <div>
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        width={300}
                        height={300}
                        alt="Wybrane zdjęcie"
                    />
                )}
            </div>
        </div>
    );
}
