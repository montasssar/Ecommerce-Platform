'use client';

import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { Product, ProductInput } from '@/types/product';
import ProductTable from '@/components/admin/ProductTable';
import ProductForm from '@/components/admin/ProductForm';

export default function ManageProductsPage() {
  const {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
  } = useProducts();

  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState<ProductInput | null>(null);
  const [editId, setEditId] = useState<string | null>(null);

  const handleAdd = () => {
    setEditData(null);
    setEditId(null);
    setShowForm(true);
  };

  const handleEdit = (product: Product) => {
    const { id, name, price, category, stock, image } = product;
    setEditData({
      name,
      price,
      category: category as ProductInput['category'],
      stock,
      image,
    });
    setEditId(id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm('Are you sure you want to delete this product?');
    if (confirm) await deleteProduct(id);
  };

  const handleSubmit = async (data: ProductInput) => {
    if (editId) {
      await updateProduct(editId, data);
    } else {
      await addProduct(data);
    }
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditData(null);
    setEditId(null);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Manage Products</h1>

      {loading && <p className="text-gray-500">Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAdd={handleAdd}
        />
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <ProductForm
            initialData={editData || undefined}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </div>
      )}
    </div>
  );
}
