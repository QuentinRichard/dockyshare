import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Login() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    };

  return (
     <div className="flex flex-col min-h-screen">
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Hero />
            <main className="flex-grow py-10">
                <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card title="Service 1" description="Description du service 1." />
                    <Card title="Service 2" description="Description du service 2." />
                    <Card title="Service 3" description="Description du service 3." />
                </div>
            </main>
            <Footer />
        </div>
  );
}
