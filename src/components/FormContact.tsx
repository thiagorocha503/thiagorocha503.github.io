import * as yup from "yup";
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CONTACT_FORM_ACTION } from "../constants";
type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

type FormFields = {
    name: string | undefined;
    email: string | undefined;
    message: string | undefined;
};

export default function FormContact() {
    const [formData, setFormData] = useState<FormFields>({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormFields>({
        name: undefined,
        email: undefined,
        message: undefined,
    });
    const formRef = useRef<HTMLFormElement>(null);
    const formSchema = yup.object().shape({
        name: yup.string().required("Fill out this field"),
        email: yup
            .string()
            .email("E-mail must be a valid email")
            .required("Fill out this field"),
        message: yup.string().max(400).required("Fill out this field"),
    });

    const handleChange = (e: React.ChangeEvent<FormControlElement>) => {
        const { name, value } = e.currentTarget;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await formSchema.validate(formData, {
                strict: true,
                abortEarly: false,
            });
            setErrors({
                name: undefined,
                email: undefined,
                message: undefined,
            });
            formRef.current?.submit();
        } catch (err: any) {
            const errors: any = {};
            err.inner.forEach((element: any) => {
                const path = element.path;
                errors[path]
                    ? errors[path].push(element.message)
                    : (errors[path] = [element.message]);
            });
            setErrors(errors);
        }
    };

    return (
        <Form
            onSubmit={handleSubmit}
            action={process.env.NODE_ENV==="production"? CONTACT_FORM_ACTION:process.env.REACT_APP_FORM_ACTION}
            method="POST"
            noValidate
            ref={formRef}
        >
            <Form.Group className="mb-3">
                <Form.Label htmlFor="name-control">Name</Form.Label>
                <Form.Control
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Type your name"
                    id="name-control"
                    name="name"
                    required
                    isInvalid={errors.name !== undefined}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="email-control">E-mail</Form.Label>
                <Form.Control
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="example@example.com"
                    id="email-control"
                    name="email"
                    required
                    isInvalid={errors.email !== undefined}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="message-control">Message</Form.Label>
                <Form.Control
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={6}
                    as="textarea"
                    id="message-control"
                    name="message"
                    required
                    isInvalid={errors.message !== undefined}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.message}
                </Form.Control.Feedback>
            </Form.Group>
            <div className="mb-3 w-100 d-grid d-md-flex justify-content-md-end">
                <Button size="lg" type="submit" title="send">
                    Send
                </Button>
            </div>
        </Form>
    );
}
