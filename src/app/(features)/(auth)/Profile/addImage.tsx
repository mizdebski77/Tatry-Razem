"use client";

import { ChangeEvent, useRef, useState, useTransition } from "react";
import Image from "next/image";
import { convertBlobUrlToFile } from "./utils";
import { uploadImage } from "@/app/core/supabase/xd";
import { createClient } from "@/app/core/supabase/client";

export default function AddImage() {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    const imageInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));

            setImageUrls([...imageUrls, ...newImageUrls]);
        }
    };

    const [isPending, startTransition] = useTransition();

    const handleClickUploadImagesButton = async () => {
        startTransition(async () => {
            let uploadedImageUrl = "";
            for (const url of imageUrls) {
                const imageFile = await convertBlobUrlToFile(url);

                const { imageUrl, error } = await uploadImage({
                    file: imageFile,
                    bucket: "avatars",
                });

                if (error) {
                    console.error(error);
                    return;
                }

                uploadedImageUrl = imageUrl; // Assuming only one avatar image is allowed
            }

            if (uploadedImageUrl) {
                try {
                    const supabase = createClient();
                    const { error } = await supabase.auth.updateUser({
                        data: { avatar_url: uploadedImageUrl },
                    });

                    if (error) {
                        console.error("Failed to update user metadata:", error);
                        return;
                    }

                    console.log("Avatar updated successfully!");
                    setImageUrls([]);
                } catch (err) {
                    console.error("Error updating user avatar:", err);
                }
            }
        });
    };


    return (
        <div className="bg-slate-500 min-h-screen flex justify-center items-center flex-col gap-8">


            <input
                type="file"
                hidden
                multiple
                ref={imageInputRef}
                onChange={handleImageChange}
                disabled={isPending}
            />

            <button
                className="bg-slate-600 py-2 w-40 rounded-lg"
                onClick={() => imageInputRef.current?.click()}
                disabled={isPending}
            >
                Select Images
            </button>

            <div className="flex gap-4">
                {imageUrls.map((url, index) => (
                    <Image
                        key={url}
                        src={url}
                        width={300}
                        height={300}
                        alt={`img-${index}`}
                    />
                ))}
            </div>

            <button
                onClick={handleClickUploadImagesButton}
                className="bg-slate-600 py-2 w-40 rounded-lg"
                disabled={isPending}
            >
                {isPending ? "Uploading..." : "Upload Images"}
            </button>
        </div>
    );
}

