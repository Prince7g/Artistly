"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee is required"),
  location: yup.string().required("Location is required")
});

const categories = ["Singer", "Dancer", "Speaker", "DJ"];
const languages = ["English", "Hindi", "Punjabi", "Tamil"];
const feeOptions = ["₹50K - ₹1L", "₹1L - ₹3L", "₹3L - ₹5L", "₹5L+"];

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: []
    }
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Artist Onboarding</h2>

        {submitted && (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-6">
            Form submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded shadow">
          {/* Name */}
          <div>
            <label className="block font-semibold">Name</label>
            <input
              {...register("name")}
              className="w-full border p-2 rounded mt-1"
              placeholder="Enter artist name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Bio */}
          <div>
            <label className="block font-semibold">Bio</label>
            <textarea
              {...register("bio")}
              className="w-full border p-2 rounded mt-1"
              rows={4}
              placeholder="Enter a short bio"
            />
            {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            {categories.map((cat) => (
              <label key={cat} className="block">
                <input
                  type="checkbox"
                  value={cat}
                  {...register("category")}
                  className="mr-2"
                />
                {cat}
              </label>
            ))}
            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
          </div>

          {/* Languages */}
          <div>
            <label className="block font-semibold mb-1">Languages Spoken</label>
            {languages.map((lang) => (
              <label key={lang} className="block">
                <input
                  type="checkbox"
                  value={lang}
                  {...register("languages")}
                  className="mr-2"
                />
                {lang}
              </label>
            ))}
            {errors.languages && (
              <p className="text-red-500 text-sm">{errors.languages.message}</p>
            )}
          </div>

          {/* Fee */}
          <div>
            <label className="block font-semibold mb-1">Fee Range</label>
            <select {...register("fee")} className="w-full border p-2 rounded">
              <option value="">Select fee range</option>
              {feeOptions.map((fee) => (
                <option key={fee} value={fee}>
                  {fee}
                </option>
              ))}
            </select>
            {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-semibold mb-1">Profile Image (Optional)</label>
            <input type="file" accept="image/*" className="w-full" />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold">Location</label>
            <input
              {...register("location")}
              className="w-full border p-2 rounded mt-1"
              placeholder="Enter city or area"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
          }
