import { 
    FaHtml5, 
    FaCss3Alt, 
    FaJs, 
    FaPhp, 
    FaNodeJs, 
    FaLaravel, 
    FaReact,  
  } from "react-icons/fa";
  import { SiC, SiTypescript, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
  import { StandaloneProps } from "../components/Carousel";
  
  
  
  const skills: StandaloneProps[] = [
      { docPage: "https://developer.mozilla.org/en-US/docs/Web/HTML", name: "HTML", icon: FaHtml5 },
      { docPage: "https://developer.mozilla.org/en-US/docs/Web/CSS", name: "CSS", icon: FaCss3Alt },
      { docPage: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", name: "JavaScript", icon: FaJs },
      { docPage: "https://www.php.net/docs.php", name: "PHP", icon: FaPhp },
      { docPage: "https://en.cppreference.com/w/c/language", name: "Language C", icon: SiC },
      { docPage: "https://www.typescriptlang.org/docs/", name: "TypeScript", icon: SiTypescript },
      { docPage: "https://reactjs.org/docs/getting-started.html", name: "ReactJS", icon: FaReact },
      { docPage: "https://nodejs.org/en/docs/", name: "NodeJS", icon: FaNodeJs },
      { docPage: "https://expressjs.com/en/starter/basic-routing.html", name: "Express", icon: SiExpress },
      { docPage: "https://laravel.com/docs", name: "Laravel", icon: FaLaravel },
      { docPage: "https://dev.mysql.com/doc/", name: "MySQL", icon: SiMysql },
      { docPage: "https://www.mongodb.com/docs/", name: "MongoDB", icon: SiMongodb },
    ];
  
  export default skills;