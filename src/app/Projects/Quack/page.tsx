"use client";
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import QPDF from "../../../../public/Projects/quack.pdf"

export default function Quack() {
  return(
    <>
    <Header/>
    <main>
      HELLO
      <div>
      <iframe src={QPDF} />
    </div>
    </main>
    <Footer/> 
    </>
  )
}