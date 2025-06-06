import Agent from '@/app/components/Agent'
import { getCurrentUser } from '@/lib/actions/auth.auction'


const page = async () => {
  const user = await getCurrentUser()
  return (
    <>
    <h3>Interview Generation</h3>
    <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  )
}

export default page