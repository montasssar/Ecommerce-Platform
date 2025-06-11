'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Product } from '@/hooks/useProducts';

type ProductInput = Omit<Product, 'id' | 'createdAt'>;

type Props = {
  initialData?: ProductInput;
  onSubmit: (data: ProductInput) => void;
  onCancel: () => void;
};

const categories = ['Techs', 'Clothes', 'Decor'];

export default function ProductForm({ initialData, onSubmit, onCancel }: Props) {
  const [formData, setFormData] = useState<ProductInput>({
    name: '',
    price: 0,
    category: 'Techs',
    stock: 0,
    image: '',
    ...(initialData || {}),
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value,
    }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (formData.price <= 0) errs.price = 'Price must be greater than 0.';
    if (!formData.image.trim()) errs.image = 'Image URL is required.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setErrors({});
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {initialData ? 'Edit Product' : 'Add New Product'}
        </h2>
        <button onClick={onCancel} title="Cancel">
          <FaTimes className="text-gray-500 hover:text-red-500 transition" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* fields: name, price, category, stock, image */}
        {['name', 'price', 'stock', 'image'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium mb-1 capitalize">
              {field}
            </label>
            <input
              type={field === 'price' || field === 'stock' ? 'number' : 'text'}
              name={field}
              value={formData[field as keyof ProductInput]}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            />
            {errors[field] && (
              <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            {initialData ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
}
