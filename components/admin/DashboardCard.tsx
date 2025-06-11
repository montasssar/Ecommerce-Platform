// components/admin/DashboardCard.tsx
type DashboardCardProps = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
};

export default function DashboardCard({ title, value, icon }: DashboardCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
      {icon && <div className="text-indigo-500 text-3xl">{icon}</div>}
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
