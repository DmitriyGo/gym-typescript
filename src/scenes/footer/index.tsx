import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        Test project to improve the skills of typescript, motion, react-anchor-link-smooth-scroll and tailwind
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Inst: <a target='_blank' className='text-primary-500' href='https://www.instagram.com/gorbatenko_dmitry/'>gorbatenko_dmitry</a></p>
                    <p className="my-5">GitHub: <a target='_blank' className='text-primary-500' href='https://github.com/DmitriyGo'>DmitriyGo</a></p>
                    <p className="my-5">LinkedIn: <a target='_blank' className='text-primary-500' href='https://www.linkedin.com/in/dmitry-gorbatenko-688a77240/'>dmitry-gorbatenko</a></p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Look for me on Telegram or Viber.</p>
                    <p>(+38) 099 254 18 41</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;