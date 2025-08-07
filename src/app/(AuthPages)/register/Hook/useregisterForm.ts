import { useState } from "react";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/apiClient";

const useRegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    ssn: "",
    licenseFront: "",
    licenseBack: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    gender: "",
    role: "user",
    email: "",
    password: "",
  });

  const [licenseFrontName, setLicenseFrontName] = useState("");
  const [licenseBackName, setLicenseBackName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "licenseFront" | "licenseBack"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const base64 = await toBase64(file);
    setFormData((prev) => ({ ...prev, [field]: base64 }));

    if (field === "licenseFront") {
      setLicenseFrontName(file.name);
    } else {
      setLicenseBackName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await apiClient.post("/auth/register", formData);
      setSuccess(true);
      router.push("/dashboard");
    } catch (err: any) {
      setError(
        err?.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleFileChange,
    handleSubmit,
    licenseFrontName,
    licenseBackName,
    loading,
    error,
    success,
  };
};

export default useRegisterForm;

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
