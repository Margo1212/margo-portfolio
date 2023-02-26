import LinkedIn from '@svg/linkedin.svg';
import GitHub from '@svg/github.svg';
import Behance from '@svg/behance.svg';
import Instagram from '@svg/instagram.svg';
import Facebook from '@svg/facebook.svg';

export const SocialMedia = () => {
    return (
        <ul className="flex drop-shadow-lg ">
            <li className='mx-2'><LinkedIn /></li>
            <li className='mx-2'><Behance /></li>
            <li className='mx-2'><Instagram /></li>
            <li className='mx-2'><Facebook /></li>
            <li className='mx-2'><GitHub /></li>
        </ul>
    )
}