
'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  fee: yup.string().required('Fee is required'),
  location: yup.string().required('Location is required'),
});

const categories = ['Singer', 'Dancer', 'Speaker', 'DJ'];
const languages = ['English', 'Hindi', 'Punjabi', 'Tamil'];
const feeOptions = ['₹50K - ₹1L', '₹1L - ₹3L', '₹3L - ₹5L', '₹5L+'];

export default function OnboardPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { category: [], languages: [] },
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const onSubmit = (data: any) => {
    const newArtist = {
      id: Date.now(),
      ...data,
      image: previewUrl || '',
    };

    const existing = JSON.parse(localStorage.getItem('artists') || '[]');
    localStorage.setItem('artists', JSON.stringify([...existing, newArtist]));

    setSubmitted(true);
    reset();
    setPreviewUrl(null);
  };

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Artist Onboarding</h2>

        {submitted && (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-6">
            Artist submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded shadow">
          <input {...register('name')} placeholder="Name" className="w-full p-2 border rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <textarea {...register('bio')} placeholder="Bio" className="w-full p-2 border rounded" />
          {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}

          <div>
            <label className="font-semibold">Category</label>
            {categories.map((cat) => (
              <label key={cat} className="block">
                <input type="checkbox" value={cat} {...register('category')} className="mr-2" />
                {cat}
              </label>
            ))}
            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
          </div>

          <div>
            <label className="font-semibold">Languages</label>
            {languages.map((lang) => (
              <label key={lang} className="block">
                <input type="checkbox" value={lang} {...register('languages')} className="mr-2" />
                {lang}
              </label>
            ))}
            {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
          </div>

          <select {...register('fee')} className="w-full border p-2 rounded">
            <option value="">Select Fee</option>
            {feeOptions.map(f => <option key={f}>{f}</option>)}
          </select>
          {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}

          <input {...register('location')} placeholder="Location" className="w-full border p-2 rounded" />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}

          <div>
            <label className="block font-semibold mb-1">Upload Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
            {previewUrl && <img src={previewUrl} alt="Preview" className="w-32 h-32 mt-2 rounded object-cover" />}
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
