"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  categories: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("City is required"),
  image: yup.string().url("Enter a valid image URL").notRequired(),
});

const categoryOptions = ["Singers", "Dancers", "DJs", "Speakers"];
const languageOptions = ["English", "Hindi", "Marathi", "Punjabi", "Tamil"];
const feeRanges = [
  "₹5,000 - ₹10,000",
  "₹10,000 - ₹20,000",
  "₹20,000 - ₹50,000",
  "₹50,000+"
];

export default function OnboardPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      categories: [],
      languages: []
    }
  });

  const onSubmit = (data: any) => {
    console.log("Submitted Artist Data:", data);
    alert("Artist submitted successfully. Check console for details.");
  };

  return (
    <>
      <Header />
      <main className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Artist Onboarding Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <input
            placeholder="Full Name"
            {...register("name")}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <textarea
            placeholder="Short Bio"
            {...register("bio")}
            className="w-full p-2 border rounded"
          />
          {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}

          {/* Categories */}
          <div>
            <label className="block font-medium mb-1">Select Categories</label>
            <Controller
              name="categories"
              control={control}
              render={({ field }) => (
                <div className="grid grid-cols-2 gap-2">
                  {categoryOptions.map((cat) => (
                    <label key={cat} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={cat}
                        checked={field.value.includes(cat)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          const value = e.target.value;
                          field.onChange(
                            checked
                              ? [...field.value, value]
                              : field.value.filter((v) => v !== value)
                          );
                        }}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              )}
            />
            {errors.categories && <p className="text-red-500 text-sm">{errors.categories.message}</p>}
          </div>

          {/* Languages */}
          <div>
            <label className="block font-medium mb-1">Languages Spoken</label>
            <Controller
              name="languages"
              control={control}
              render={({ field }) => (
                <div className="grid grid-cols-2 gap-2">
                  {languageOptions.map((lang) => (
                    <label key={lang} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={lang}
                        checked={field.value.includes(lang)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          const value = e.target.value;
                          field.onChange(
                            checked
                              ? [...field.value, value]
                              : field.value.filter((v) => v !== value)
                          );
                        }}
                      />
                      {lang}
                    </label>
                  ))}
                </div>
              )}
            />
            {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
          </div>

          {/* Fee Range */}
          <select {...register("feeRange")} className="w-full p-2 border rounded">
            <option value="">Select Fee Range</option>
            {feeRanges.map((fee) => (
              <option key={fee} value={fee}>{fee}</option>
            ))}
          </select>
          {errors.feeRange && <p className="text-red-500 text-sm">{errors.feeRange.message}</p>}

          {/* City */}
          <input
            placeholder="City"
            {...register("location")}
            className="w-full p-2 border rounded"
          />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}

          {/* Image URL */}
          <input
            placeholder="Profile Image URL (Optional)"
            {...register("image")}
            className="w-full p-2 border rounded"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
    }
