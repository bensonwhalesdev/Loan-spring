import { useState, ChangeEvent, FormEvent } from "react";
import apiClient from "@/lib/apiClient";
import { useRouter } from "next/navigation";

interface LoginFormData {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await apiClient.post(`/auth/login`, formData);
      router.push("/dashboard");
      localStorage.setItem("token", res.data.token);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
  };
};

export default useLoginForm;
