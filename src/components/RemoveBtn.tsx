'use client'
import { useRouter } from 'next/navigation'
import { HiOutlineTrash } from 'react-icons/hi'

interface RemoveBtnProps {
 id: string
 onDelete?: (id: string) => void
}

export default function RemoveBtn({ id, onDelete }: RemoveBtnProps) {
 const router = useRouter()
 
 async function removeTopic() {
  const confirmed = confirm('Are you sure you want to delete this topic?')
  if (confirmed) {
   try {
    const res = await fetch(`/api/topics/${id}`, {
     method: 'DELETE',
    })
    if (res.ok) {
     if (onDelete) {
      onDelete(id)
     } else {
      router.refresh()
     }
    } else {
     console.error('Failed to delete topic')
    }
   } catch (error) {
    console.error('Error deleting topic:', error)
   }
  }
 }
 
 return (
  <button className="text-red-400" onClick={removeTopic}>
   <HiOutlineTrash size={24} />
  </button>
 )
}