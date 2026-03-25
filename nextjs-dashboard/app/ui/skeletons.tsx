const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200" />
      </div>
      <div className="rounded-xl bg-white px-4 py-8">
        <div className="h-7 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className="w-full animate-pulse md:col-span-4">
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-200" />
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="h-[350px] rounded-md bg-white p-4" />
        <div className="pt-6">
          <div className="h-4 w-24 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-4 shadow-sm`}
    >
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full bg-gray-200" />
        <div className="ml-4 h-4 w-24 rounded-md bg-gray-200" />
      </div>
      <div className="mt-4 h-4 w-40 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div className="mb-4 h-8 w-40 rounded-md bg-gray-200" />
      <div className="grow rounded-xl bg-gray-50 p-4">
        <div className="space-y-4 bg-white px-6 py-4">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div className="mb-4 h-8 w-32 rounded-md bg-gray-200" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardsSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-200 py-3 text-sm last-of-type:border-none">
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          <div className="h-4 w-24 rounded-md bg-gray-200" />
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-4 w-32 rounded-md bg-gray-200" />
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-4 w-16 rounded-md bg-gray-200" />
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-4 w-16 rounded-md bg-gray-200" />
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded-full bg-gray-200" />
      </td>
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-8 w-8 rounded-md bg-gray-200" />
          <div className="h-8 w-8 rounded-md bg-gray-200" />
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <div className="mb-2 h-4 w-24 rounded-md bg-gray-200" />
          <div className="h-3 w-32 rounded-md bg-gray-200" />
        </div>
        <div className="h-8 w-8 rounded-full bg-gray-200" />
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="mb-2 h-4 w-16 rounded-md bg-gray-200" />
          <div className="h-6 w-20 rounded-full bg-gray-200" />
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-md bg-gray-200" />
          <div className="h-8 w-8 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}