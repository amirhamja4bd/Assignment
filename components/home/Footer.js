import React from 'react';
import Social from './Social';

const Footer = () => {
    return (
        <div>
            <footer className="p-6 bg-white text-black md:px-16">
                <div className="flex flex-col sm:flex-row justify-between container border-b-2 pb-3 mb-3">
                    <img className="cursor-pointer w-52 sm:w-auto mx-auto sm:mx-0" src="https://evernote.com/img/logo/evernote/primary.svg" alt="..." />
                    <Social/>
                </div>
                <div className="container  grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-bold">PRODUCT</h2>
                        <div className="flex flex-col space-y-2 text-sm text-black">
                            <a href="#" className="hover:text-primary">Why Evernote</a>
                            <a href="#" className="hover:text-primary">Evernote Free</a>
                            <a href="#" className="hover:text-primary">Evernote Personal</a>
                            <a href="#" className="hover:text-primary">Evernote Professional</a>
                            <a href="#" className="hover:text-primary">Evernote Teams</a>
                            <a href="#" className="hover:text-primary">Compare Plans</a>
                            <a href="#" className="hover:text-primary">Student Discount</a>
                            <a href="#" className="hover:text-primary">Download App</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-bold">FEATURES</h2>
                        <div className="flex flex-col space-y-2 text-sm text-black">
                            <a href="#" className="hover:text-primary">Web Clipper</a>
                            <a href="#" className="hover:text-primary">Templates</a>
                            <a href="#" className="hover:text-primary">Spaces</a>
                            <a href="#" className="hover:text-primary">Integrations</a>
                            <a href="#" className="hover:text-primary">Notes Sync</a>
                            <a href="#" className="hover:text-primary">PDF & Doc Search</a>
                            <a href="#" className="hover:text-primary">Search Handwriting</a>
                            <a href="#" className="hover:text-primary">Document Scanner</a>
                            <a href="#" className="hover:text-primary">Notebooks & Tags</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-bold">RESOURCES</h2>
                        <div className="flex flex-col space-y-2 text-sm text-black">
                            <a href="#" className="hover:text-primary">Resources</a>
                            <a href="#" className="hover:text-primary">Make Connections</a>
                            <a href="#" className="hover:text-primary">Become an Expert</a>
                            <a href="#" className="hover:text-primary">Find an Expert</a>
                            <a href="#" className="hover:text-primary">Early Access</a>
                            <a href="#" className="hover:text-primary">Affiliates</a>
                            <a href="#" className="hover:text-primary">Developers</a>
                            <a href="#" className="hover:text-primary">Blog</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-bold">SUPPORT</h2>
                        <div className="flex flex-col space-y-2 text-sm text-black">
                            <a href="#" className="hover:text-primary">Help & Learning</a>
                            <a href="#" className="hover:text-primary">Troubleshooting</a>
                            <a href="#" className="hover:text-primary">Forum</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-12 text-sm">
                    <span className="text-black">© 2023 Evernote Corporation. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;