import { OrderTracking } from "@/components/order/order-tracking"
import { Suspense } from "react"

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderTracking orderId={params.id} />
    </Suspense>
  )
}
