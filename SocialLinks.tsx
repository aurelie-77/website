import {FaYoutube, FaTwitter, FaDiscord} from 'react-icons/fa'

export const SocialLinks = () =>{
    return(
        <section className="mt-5">
            <h3 className="text-2xl font-extrabold">Mes réseaux sociaux</h3>

          <ul className="mt-5">
            <li className='flex items-center'><FaYoutube className='mr-2'/><a href="https://www.youtube.com/"></a>YOUTUBE</li>
            <li className='flex items-center'><FaTwitter className='mr-2'/><a href="https://twitter.com/?lang=fr">Twitter</a></li>
            <li className='flex items-center'><FaDiscord className='mr-2'/><a href="https://www.instagram.com/">Instagram</a></li>
          </ul>
        </section>
    )
}