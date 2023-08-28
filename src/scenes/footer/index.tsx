import Logo from '@/assets/Logo.png'

const Footer = () => {
  return <footer className='bg-primary-100 py-16'>
    <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt='logo' src={Logo}/>
            <p className='my-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Atque animi veritatis eum, mollitia, amet facilis velit recusandae adipisci debitis unde iure ea voluptas expedita, 
                doloribus quas rem nostrum. Mollitia, voluptas?
            </p>
            <p>
            © ASTOR4
            </p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Massa orci senectus</p>
            <p className="my-5">Massa orci senectus</p>
            <p>Ullamcorper vivamus</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Massa orci senectus</p>
            <p>(333)425-6825</p>
        </div>
    </div>
    
    </footer>
}

export default Footer