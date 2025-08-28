'use client'
import CommitmentSection from '../../components/contact-components/CommitmentSection'
import ContactForm from '../../components/contact-components/ContactForm'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <CommitmentSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default page
