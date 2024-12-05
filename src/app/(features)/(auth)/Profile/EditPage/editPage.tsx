"use client";
import React, { useEffect, useState, useTransition } from "react";
import {
    EditSection,
    EditWrapper,
    EditTitle,
    Form,
    FormHeader,
    TextArea,
    SocialWrapper,
    SocialInput,
    AlertWrapper,
    AlertTitle,
    AlertSpan,
    ButtonWrapper,
    ImageWrapper,
} from "./styledEditPage";
import { motion } from "framer-motion";
import { Button, Input } from "@/app/common/UI/UI";
import { updateUser } from "../../authActions";
import { toast } from "react-hot-toast";
import { User } from "@supabase/supabase-js";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { EditInputs, SocialInputs } from "@/app/common/arrays";
import AddImage from "./AddImage/addImage";
import { createClient } from "@/app/core/supabase/client";
import { uploadImage } from "@/app/(features)/(auth)/uploadImage";
import { convertBlobUrlToFile } from "@/app/core/supabase/utils";

interface EditPageProps {
    user: User | undefined;
    setEditPage: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormFields {
    name: string;
    surname: string;
    email: string;
    location: string;
    bio: string;
    facebook_url: string;
    instagram_url: string;
    youtube_url: string;
}

export const EditPage: React.FC<EditPageProps> = ({ user, setEditPage }) => {
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState<FormFields>({
        name: "",
        surname: "",
        email: "",
        location: "",
        bio: "",
        facebook_url: "",
        instagram_url: "",
        youtube_url: "",
    });
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            const { user_metadata } = user;
            setFormData((prevData) => ({
                ...prevData,
                ...user_metadata,
                email: user.email || prevData.email,
            }));
        }
    }, [user]);

    const handleUpdate = async () => {
        startTransition(async () => {
            try {
                let uploadedImageUrl = null;

                if (imageUrl) {
                    const imageFile = await convertBlobUrlToFile(imageUrl);
                    const { imageUrl: url, error } = await uploadImage({
                        file: imageFile,
                        bucket: "avatars",
                    });

                    if (error) {
                        toast.error("Błąd podczas przesyłania obrazu.");
                        return;
                    }

                    uploadedImageUrl = url;
                }

                const supabase = createClient();
                const updatedData = {
                    ...formData,
                    avatar_url:
                        uploadedImageUrl || user?.user_metadata.avatar_url,
                };

                const { error } = await supabase.auth.updateUser({
                    data: updatedData,
                });

                if (error) {
                    toast.error("Błąd podczas aktualizacji danych.");
                    return;
                }

                toast.success("Dane zaktualizowane pomyślnie!");
                setEditPage(false);
                setImageUrl(null);
            } catch (error) {
                toast.error("Wystąpił błąd podczas aktualizacji.");
            }
        });
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <EditSection
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <EditWrapper>
                <EditTitle>Edytuj swój profil</EditTitle>
                <Form>
                    <FormHeader>Zdjęcie profilowe</FormHeader>
                    <ImageWrapper>
                        <AddImage
                            imageUrl={imageUrl}
                            setImageUrl={setImageUrl}
                        />
                    </ImageWrapper>

                    <FormHeader>Dane podstawowe</FormHeader>
                    {EditInputs.map((field) =>
                        field.component === "input" ? (
                            <Input
                                key={field.id}
                                placeHolder={field.placeholder}
                                name={field.name}
                                required={false}
                                text=""
                                isError={0}
                                type="text"
                                value={formData[field.name as keyof FormFields]}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <React.Fragment key={field.id}>
                                <FormHeader>
                                    Opisz siebie żeby można było cię lepiej
                                    poznać
                                </FormHeader>
                                <TextArea
                                    name={field.name}
                                    value={
                                        formData[field.name as keyof FormFields]
                                    }
                                    onChange={handleInputChange}
                                />
                            </React.Fragment>
                        )
                    )}

                    <FormHeader>Social media:</FormHeader>
                    {SocialInputs.map((social) => (
                        <SocialWrapper key={social.id}>
                            <social.icon style={{ fontSize: "28px" }} />
                            <SocialInput
                                placeholder={social.placeholder}
                                name={social.name}
                                value={
                                    formData[social.name as keyof FormFields]
                                }
                                onChange={handleInputChange}
                            />
                        </SocialWrapper>
                    ))}

                    <ButtonWrapper>
                        <Button
                            $background="blue"
                            type="button"
                            disabled={isPending}
                            onClick={handleUpdate}
                            text={isPending ? "Zapisywanie..." : "Zapisz"}
                        />
                        <Button
                            $background="red"
                            onClick={() => setEditPage(false)}
                            text="Anuluj"
                            type="button"
                            disabled={false}
                        />
                    </ButtonWrapper>
                </Form>
            </EditWrapper>
        </EditSection>
    );
};
