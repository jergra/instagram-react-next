
import { useSession, signOut } from 'next-auth/react';

function MiniProfile() {
    const {data: session} = useSession()

    console.log('session in MiniProfile:', session)
    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img 
                src={session?.user?.image}
                className='rounded-full border p-[2px] w-16 h-16'
                alt={session?.user?.name}
            />
            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>{session?.user?.name}</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
            </div>
            <button 
                onClick={signOut}
                className='text-blue-400 text-sm font-semibold'
            >
                Sign out
            </button>
        </div>
    )
}

export default MiniProfile