"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const schema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  city: yup.string().required(),
  language: yup.string().required(),
  bio: yup.string().required(),
  fee: yup.number().required()
});

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log("Submitted artist:", data);
    alert("Artist submitted. Check console.");
  };

  return (
    <>
      <Header />
      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Become an Artist</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input placeholder="Name" {...register("name")} className="input" />
          <input placeholder="Category" {...register("category")} className="input" />
          <input placeholder="City" {...register("city")} className="input" />
          <input placeholder="Language" {...register("language")} className="input" />
          <textarea placeholder="Bio" {...register("bio")} className="input" />
          <input type="number" placeholder="Expected Fee" {...register("fee")} className="input" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
        {Object.keys(errors).length > 0 && <p className="text-red-500 mt-2">All fields required</p>}
      </main>
      <Footer />
    </>
  );
      }
