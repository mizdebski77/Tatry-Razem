"use client";
import React, {
    ChangeEvent,
    useEffect,
    useRef,
    useState,
    useTransition,
} from "react";
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
    Image,
    ImageWrapper,
    LoadingOverlay,
} from "./styledEditPage";
import { motion } from "framer-motion";
import { Button, Input } from "@/app/common/UI/UI";
import { toast } from "react-hot-toast";
import { User } from "@supabase/supabase-js";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { EditInputs, SocialInputs } from "@/app/common/arrays";
import { uploadImage } from "../../uploadImage";
import { convertBlobUrlToFile } from "@/app/core/supabase/utils";
import { createClient } from "@/app/core/supabase/client";

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
    const imageInputRef = useRef<HTMLInputElement>(null);
    const [avatar_url, setAvatar_url] = useState<string | null>(null);
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
    const [updateTriggered, setUpdateTriggered] = useState(false);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const newImageUrl = URL.createObjectURL(file);
            setAvatar_url(newImageUrl);

            if (imageInputRef.current) {
                imageInputRef.current.value = "";
            }
        }
    };

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

    useEffect(() => {
        if (!isPending && updateTriggered) {
            setEditPage(false);
            setUpdateTriggered(false);
        }
    }, [isPending, updateTriggered, setEditPage]);

    const handleUpdate = async () => {
        startTransition(async () => {
            let uploadedImageUrl = null;

            if (avatar_url) {
                const imageFile = await convertBlobUrlToFile(avatar_url);
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

            const updatedData = {
                ...formData,
                avatar_url: uploadedImageUrl || user?.user_metadata.avatar_url,
            };

            const supabase = createClient();
            const email = formData.email as string;

            const { error } = await supabase.auth.updateUser({
                email: email,
                data: updatedData,
            });

            if (error) {
                toast.error(error.message);
            } else {
                toast.success(
                    formData.email === "" || formData.email === user?.email
                        ? "Dane zaktualizowano pomyślnie."
                        : "Potwierdź zaktualizowany E-Mail."
                );

                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }

            setAvatar_url(null);
        });
    };

    const showConfirmationDialog = (
        title: string,
        message: string,
        onConfirm: () => void
    ) => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <AlertWrapper>
                    <AlertTitle>{title}</AlertTitle>
                    <AlertSpan>{message}</AlertSpan>
                    <Button
                        type="button"
                        disabled={false}
                        text="Nie"
                        $background="white"
                        onClick={onClose}
                    />
                    <Button
                        type="button"
                        disabled={false}
                        text={"Tak"}
                        $background="red"
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                    />
                </AlertWrapper>
            ),
        });
    };

    const handleFormSubmit = () => {
        setUpdateTriggered(true);
        handleUpdate();
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
            {isPending && (
                <LoadingOverlay>
                    <p>Proszę czekać, dane są aktualizowane...</p>
                </LoadingOverlay>
            )}
            <EditWrapper>
                <EditTitle>Edytuj swój profil</EditTitle>
                <Form>
                    <FormHeader>Zdjęcie profilowe</FormHeader>
                    <ImageWrapper>
                        <Image
                            src={
                                avatar_url === null
                                    ? user?.user_metadata.avatar_url
                                    : avatar_url
                            }
                        />
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
                        <button
                            type="button"
                            onClick={() => setAvatar_url(null)}
                        >
                            Usuń
                        </button>
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
                            disabled={false}
                            onClick={() =>
                                showConfirmationDialog(
                                    "Na pewno chcesz zapisać dane?",
                                    "Twoje dane zostaną zaktualizowane.",
                                    handleFormSubmit
                                )
                            }
                            text="Zapisz"
                        />
                        <Button
                            $background="red"
                            onClick={() =>
                                showConfirmationDialog(
                                    "Na pewno chcesz zamknąć?",
                                    "Twoje dane nie zostaną zapisane.",
                                    () => setEditPage(false)
                                )
                            }
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
