import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'

export default function NotFound() {
  return (
    <div className="text-center my-[60px]">
      <h2 className="text-[40px] font-[700] text-primary">404 Not Found</h2>
      <p className="mt-[10px] mb-[30px] text-primary">Could not find requested resource</p>
      <Link
        href="/"
        className="inline-flex bg-primary text-white py-[15px] px-[40px] rounded-[5px] items-center border border-primary gap-2 hover:bg-white hover:text-primary transition-all"
      >
        <FaArrowLeftLong /> Return Home
      </Link>
    </div>
  )
}