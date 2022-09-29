import type {NextPage} from 'next'
import markofediv from '../public/markofediv.jpg'
import Main from "../components/Main";
import {MainNav} from "../parts/MainNav";
import PageSpacer from "../components/PageSpacer";
import undraw_code_inspection_bdl7 from "../assets/undraw_code_inspection_bdl7.svg";
import undraw_web_developer_re_h7ie from "../assets/undraw_web_developer_re_h7ie.svg";
import undraw_develop_app_re_bi4i from "../assets/undraw_develop_app_re_bi4i.svg";
import undraw_videographer_nnc7 from "../assets/undraw_videographer_nnc7.svg";
import undraw_photo_session_clqr from "../assets/undraw_photo_session_clqr.svg";
import undraw_mic_drop_uuyg from "../assets/undraw_mic_drop_uuyg.svg";
import screenshot_myjumpdata from "../assets/screenshot_myjumpdata.jpg";
import {
  FaChevronRight,
  FaEnvelope,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import WaveSeperator from "../components/WaveSeperator";
import {MainFooter} from "../parts/MainFooter";
import {Section} from "../components/Section";
import Image from "next/image";

const Home: NextPage = () => {
  return (<Main>
      <MainNav/>
      <PageSpacer/>
      <div className="container px-3 mx-auto flex flex-wrap flex-col sm:flex-row items-center">
        <div className="flex flex-col w-full sm:w-3/5 justify-center items-start text-center sm:text-left pr-4">
          <h1 className="my-4 lg:text-6xl text-2xl font-bold leading-tight w-full">
            Hi, ich bin Marko Fediv!
          </h1>
          <div
            className="leading-normal lg:text-2xl text-xl mb-8 w-full flex items-center justify-center sm:justify-start space-x-4">
            <div className="flex items-center">
              <span className="text-sm">Lass uns Kontakt aufnehmen</span>
              <FaChevronRight className="h-4 inline fill-current"/>
            </div>
            <a href="https://instagram.com/maggggoooooo">
              <FaInstagram className="-mt-2 h-8 w-8 inline fill-current"/>
            </a>
            <a href="mailto:marko.fediv@gmail.com">
              <FaEnvelope className="-mt-2 h-8 w-8 inline fill-current"/>
            </a>
            <a href="tel:+4917682763899">
              <FaPhone className="-mt-2 h-8 w-8 inline fill-current"/>
            </a>
          </div>
        </div>
        <div className="text-center w-full sm:w-2/5">
          <Image
            className="w-full z-50 rounded-full border-yellow-500 border-8 shadow-sm max-w-xs sm:max-w-none mx-auto sm:mx-0"
            src={markofediv}
            alt="Marko Fediv"
          />
        </div>
      </div>
      <WaveSeperator/>
      <Section heading="Was kann ich?">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
          <SkillBox
            img={undraw_web_developer_re_h7ie}
            name="Web Entwicklung"
            text="Gestaltung und Umsetzung von Webseiten"
          />
          <SkillBox
            img={undraw_code_inspection_bdl7}
            name="App Entwicklung"
            text="Gestaltung und Umsetzung von Fullstack Apps"
          />
          <SkillBox
            img={undraw_develop_app_re_bi4i}
            name="Mobile App Entwicklung"
            text="Gestatlung und Umsetzung von Mobilen Apps"
          />
          <SkillBox
            img={undraw_videographer_nnc7}
            name="Video Produktion"
            text="Aufnahme und Verarbeitung von Videoaufnahmen"
          />
          <SkillBox
            img={undraw_photo_session_clqr}
            name="Foto Aufnahmen"
            text="Aufnahme und Verarbeitung von Fotoaufnahmen"
          />
          <SkillBox
            img={undraw_mic_drop_uuyg}
            name="Ton Aufnahmen"
            text="Aufnahme und Verarbeitung von Tonaufhahmen"
          />
        </div>
      </Section>
      <Section heading="Was sind meine Erfahrungen?">
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 pt-10 md:pt-12">
          <ProjectBox
            name="myJumpData"
            img={screenshot_myjumpdata}
            link="https://myjumpdata.fediv.me"
          />
        </div>
      </Section>
      <WaveSeperator rotated/>
      <MainFooter/>
    </Main>
  )
}

function ProjectBox({
                      name,
                      img,
                      link,
                    }: {
  name: string;
  img: any;
  link: string;
}) {
  return (
    <div className="shadow rounded-lg relative group">
      <div className="block">
        <Image src={img} alt={"Grafik " + name} className="rounded-lg"/>
      </div>
      <div
        className="text-center z-10 opacity-0 group-hover:opacity-100 bg-yellow-400 bg-opacity-75 absolute w-full h-full flex flex-col top-0 justify-center transition duration-1000 ease-in-out space-y-8">
        <h3 className="font-bold text-2xl lg:text-4xl text-white uppercase">
          {name}
        </h3>
        <a
          href={link}
          className="py-2 px-4 text-black bg-white rounded mx-auto underline"
          target="_blank"
          rel="noreferrer"
        >
          Ansehen
        </a>
      </div>
    </div>
  );
}

function SkillBox({name, text, img}: any) {
  return (
    <div
      className="shadow px-8 py-12 hover:bg-yellow-400 transition duration-1000 ease-in-out rounded-lg group flex flex-col justify-between">
      <div className="block">
        <Image src={img} alt={"Grafik " + name} className="max-h-48 mx-auto"/>
      </div>
      <div className="text-center">
        <h3
          className="font-semibold text-lg lg:text-xl text-yellow-500 group-hover:text-white transition duration-1000 ease-in-out uppercase pt-8">
          {name}
        </h3>
        <p
          className="text-sm md:text-base text-gray-800 group-hover:text-white transition duration-1000 ease-in-out pt-4">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Home
