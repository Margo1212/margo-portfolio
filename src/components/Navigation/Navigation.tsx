import { Language } from '@components/Language/Language';
import { NavigationMenu } from '@components/NavigationMenu/NavigationMenu';
import { SocialMedia } from '@components/SocialMedia/SocialMedia';
import Logo from '@svg/logo.svg';

export const Navigation = () => {
    return (
        <nav className="w-full h-20 px-32 flex justify-between items-center border-[0.1px] border-text-light">
            <Logo />
            <NavigationMenu color='purple' />
            <div className='flex'>
                <SocialMedia fill='purple' />
                <Language />
            </div>
        </nav>
    )
}