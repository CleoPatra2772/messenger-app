import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import SignInComponent from './SignInComponent';
import logo from '../../images/logo.jpg'

async function SignInPage() {
    const providers = await getProviders();

    return(
        <div className='grid justify-center '>
            <div>
                <Image 
                className='rounded-full mx-2 object-scale-down'
                width={700}
                height={700}
                src={logo}
                alt="Profile Pic"
                />
            </div>

            <SignInComponent providers={providers} />
        </div>
    )
}

export default SignInPage;

