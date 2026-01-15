"use client";

import { useState, useCallback, ChangeEvent } from "react";
import type { ContactFormData } from "@/types";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleFocus = useCallback((field: string) => {
    setFocusedField(field);
  }, []);

  const handleBlur = useCallback(() => {
    setFocusedField(null);
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setFocusedField(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      // TODO: Implement actual form submission
      console.log("Form submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      resetForm();
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, resetForm]);

  return {
    formData,
    focusedField,
    isSubmitting,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    resetForm,
  };
}
