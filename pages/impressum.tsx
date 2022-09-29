import type {NextPage} from 'next'
import markofediv from '../public/markofediv.jpg'
import Main from "../components/Main";
import {MainNav} from "../parts/MainNav";
import PageSpacer from "../components/PageSpacer";
import WaveSeperator from "../components/WaveSeperator";
import {MainFooter} from "../parts/MainFooter";
import {Section} from "../components/Section";
import Image from "next/image";
import undraw_terms_re_6ak4 from "../assets/undraw_terms_re_6ak4.svg";
import Link from "next/link";

const Impressum: NextPage = () => {
  return (
    <Main>
      <MainNav/>
      <PageSpacer/>
      <Jumbotron/>
      <WaveSeperator/>
      <MainContent/>
      <WaveSeperator rotated/>
      <MainFooter/>
    </Main>
  );
}

function Jumbotron() {
  return (
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
        <p className="tracking-loose w-full">Legales</p>
        <h1 className="my-4 lg:text-4xl text-2xl font-bold leading-tight w-full">
          Impressum
        </h1>
        <p className="leading-normal lg:text-2xl text-xl mb-8 w-full hidden"></p>
      </div>
      <div className="text-center w-full md:w-2/5">
        <Image
          className="w-full z-50"
          src={undraw_terms_re_6ak4}
          alt="undraw_terms_re_6ak4"
        />
        <Link href="undraw.co" className="hidden">
          <a>undraw.co</a>
        </Link>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <TermsSection heading="Angaben gemäß § 5 TMG">
        <TermsText>
          Marko Fediv
          <br/>
          Postfach 14 03
          <br/>
          63404 Hanau
        </TermsText>
      </TermsSection>
      <TermsSection heading="Kontakt">
        <TermsText>
          Telefon: <a href="tel:017682763899">017682763899</a>
          <br/>
          Email:{" "}
          <a href="marilto:marko.fediv@gmail.com">marko.fediv@gmail.com</a>
        </TermsText>
      </TermsSection>
    </div>
  );
}

function TermsSection({
                        children,
                        heading,
                      }: {
  children?: any;
  heading: string;
}) {
  return (
    <Section heading={heading}>
      <div className="max-w-prose mx-auto text-justify break-normal">
        {children}
      </div>
    </Section>
  );
}

function TermsText({children}: { children?: any }) {
  return <p className="mb-4">{children}</p>;
}

export default Impressum
