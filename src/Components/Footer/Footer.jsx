import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-700 py-10 px-16 tracking-wide">
            <div className="container">
                <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
                    <p className="text-slate-300 text-[15px] leading-loose">© DOLA AKTER All rights reserved.</p>
                    <ul className="flex space-x-8 gap-y-3 max-lg:justify-center flex-wrap">
                        <li><a href="javascript:void(0)" className="text-[15px] text-slate-300 hover:text-white">Terms of Service</a></li>
                        <li><a href="javascript:void(0)" className="text-[15px] text-slate-300 hover:text-white">Privacy Policy</a></li>
                        <li><a href="javascript:void(0)" className="text-[15px] text-slate-300 hover:text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
