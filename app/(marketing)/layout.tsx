import React from 'react'
import Navbar from '../navigation/navbar';
import Footer from '../navigation/footer';

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
};

export default MarketingLayout