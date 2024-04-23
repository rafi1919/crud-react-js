import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const NavbarProps = [
    {
        name: 'count',
        link: '/'
    },
    {
        name: 'crud',
        link: '/crud'
    }
];

const Index = () => {
    const location = useLocation();

    return (
        <div className="static w-full items-center justify-center flex p-3">
            <div className="w-fit flex flex-row rounded-full bg-slate-500 m-3">
                {NavbarProps.map((item, index) => (
                    <a key={index} href={item.link} className={`p-3 rounded-full ${location.pathname === item.link ? 'bg-primary text-white' : 'bg-none text-black'}`} >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Index;
