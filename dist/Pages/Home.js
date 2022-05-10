import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import {Button} from "../Components/index.js";
import figlet from "../../_snowpack/pkg/figlet.js";
import ReactGA from "../../_snowpack/pkg/react-ga4.js";
function Home({}) {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [font, setFont] = useState("Standard");
  const [fonts, setFonts] = useState([]);
  useEffect(() => {
    fetch("fonts.json").then((res) => res.json()).then((data) => {
      console.log(data.fonts);
      setFonts(data.fonts);
    });
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-8 mt-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: " text-green-400 drop-shadow xl:block hidden  shadow-green-400 bg-transparent  text-center font-[Monospace] whitespace-pre text-[10px] overflow-clip"
  }, bannerFull), /* @__PURE__ */ React.createElement("h1", {
    className: " text-green-400 md:block xl:hidden hidden  drop-shadow shadow-green-400 bg-transparent  text-center font-[Monospace] whitespace-pre text-[10px] overflow-clip"
  }, bannerMed), /* @__PURE__ */ React.createElement("h1", {
    className: " text-green-400 md:hidden sm:block drop-shadow shadow-green-400 bg-transparent  text-center font-[Monospace] whitespace-pre text-[0.5rem] overflow-clip"
  }, bannerMed), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-8 mt-8 mx-4 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: inputText,
    onChange: (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
      figlet.text(e.target.value, {font}, function(err, data) {
        if (err) {
          console.log(err);
          return;
        }
        setOutputText(data);
        console.log(data);
      });
    },
    className: "w-full border border-green-400  outline-none  p-2 rounded-lg bg-transparent text-green-400 shadow  transition-all shadow-green-400 placeholder-green-700",
    placeholder: "Enter text here"
  })), /* @__PURE__ */ React.createElement("input", {
    type: "range",
    min: "0",
    value: fonts.indexOf(font),
    onChange: (e) => {
      setFont(fonts[e.target.value]);
      figlet.text(inputText, {font: fonts[e.target.value]}, function(err, data) {
        if (err) {
          console.log(err);
          return;
        }
        setOutputText(data);
        console.log(data);
      });
    },
    max: fonts.length - 1,
    className: "mt-8 bg-transparent appearance-none border-green-400 border rounded-full shadow shadow-green-400"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-white"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "p-4 border border-green-400 shadow shadow-green-400 overflow-x-scroll empty:hidden rounded-lg w-full float-left font-[Monospace] whitespace-pre text-[10px] text-green-400"
  }, outputText)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-evenly"
  }, /* @__PURE__ */ React.createElement("select", {
    className: "outline-none shadow shadow-green-400 text-green-400 p-1 rounded-lg bg-[rgb(10,10,10)] border border-green-400",
    value: font,
    onChange: (e) => {
      setFont(e.target.value);
      figlet.text(inputText, {
        font: e.target.value
      }, function(err, data) {
        if (err) {
          console.log(err);
          return;
        }
        setOutputText(data);
        console.log(data);
      });
    }
  }, fonts.map((font2, index) => /* @__PURE__ */ React.createElement("option", {
    key: index,
    value: font2,
    className: "text-green-400 border border-green-400 focus:bg-green-400 "
  }, font2))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => {
      ReactGA.event({
        category: "User Action",
        action: "Clicked on the 'Copy' button",
        label: "Copied to clipboard"
      });
      navigator.clipboard.writeText(outputText);
    },
    className: "text-green-400 shadow shadow-green-400 drop-shadow rounded-lg bg-black border border-green-400"
  }, "Copy to Clipboard")))));
}
const bannerFull = `
█████████    █████████    █████████  █████ █████    ███████████ ██████████ █████ █████ ███████████      █████████  ██████████ ██████   █████ ██████████ ███████████     █████████   ███████████    ███████    ███████████  
███░░░░░███  ███░░░░░███  ███░░░░░███░░███ ░░███    ░█░░░███░░░█░░███░░░░░█░░███ ░░███ ░█░░░███░░░█     ███░░░░░███░░███░░░░░█░░██████ ░░███ ░░███░░░░░█░░███░░░░░███   ███░░░░░███ ░█░░░███░░░█  ███░░░░░███ ░░███░░░░░███ 
░███    ░███ ░███    ░░░  ███     ░░░  ░███  ░███    ░   ░███  ░  ░███  █ ░  ░░███ ███  ░   ░███  ░     ███     ░░░  ░███  █ ░  ░███░███ ░███  ░███  █ ░  ░███    ░███  ░███    ░███ ░   ░███  ░  ███     ░░███ ░███    ░███ 
░███████████ ░░█████████ ░███          ░███  ░███        ░███     ░██████     ░░█████       ░███       ░███          ░██████    ░███░░███░███  ░██████    ░██████████   ░███████████     ░███    ░███      ░███ ░██████████  
░███░░░░░███  ░░░░░░░░███░███          ░███  ░███        ░███     ░███░░█      ███░███      ░███       ░███    █████ ░███░░█    ░███ ░░██████  ░███░░█    ░███░░░░░███  ░███░░░░░███     ░███    ░███      ░███ ░███░░░░░███ 
░███    ░███  ███    ░███░░███     ███ ░███  ░███        ░███     ░███ ░   █  ███ ░░███     ░███       ░░███  ░░███  ░███ ░   █ ░███  ░░█████  ░███ ░   █ ░███    ░███  ░███    ░███     ░███    ░░███     ███  ░███    ░███ 
█████   █████░░█████████  ░░█████████  █████ █████       █████    ██████████ █████ █████    █████       ░░█████████  ██████████ █████  ░░█████ ██████████ █████   █████ █████   █████    █████    ░░░███████░   █████   █████
░░░░░   ░░░░░  ░░░░░░░░░    ░░░░░░░░░  ░░░░░ ░░░░░       ░░░░░    ░░░░░░░░░░ ░░░░░ ░░░░░    ░░░░░         ░░░░░░░░░  ░░░░░░░░░░ ░░░░░    ░░░░░ ░░░░░░░░░░ ░░░░░   ░░░░░ ░░░░░   ░░░░░    ░░░░░       ░░░░░░░    ░░░░░   ░░░░░ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
`;
const bannerMed = `
█████████    █████████    █████████  █████ █████    ███████████ ██████████ █████ █████ ███████████   
███░░░░░███  ███░░░░░███  ███░░░░░███░░███ ░░███    ░█░░░███░░░█░░███░░░░░█░░███ ░░███ ░█░░░███░░░█  
░███    ░███ ░███    ░░░  ███     ░░░  ░███  ░███    ░   ░███  ░  ░███  █ ░  ░░███ ███  ░   ░███  ░  
░███████████ ░░█████████ ░███          ░███  ░███        ░███     ░██████     ░░█████       ░███     
░███░░░░░███  ░░░░░░░░███░███          ░███  ░███        ░███     ░███░░█      ███░███      ░███     
░███    ░███  ███    ░███░░███     ███ ░███  ░███        ░███     ░███ ░   █  ███ ░░███     ░███     
█████   █████░░█████████  ░░█████████  █████ █████       █████    ██████████ █████ █████    █████    
░░░░░   ░░░░░  ░░░░░░░░░    ░░░░░░░░░  ░░░░░ ░░░░░       ░░░░░    ░░░░░░░░░░ ░░░░░ ░░░░░    ░░░░░    
                                                                                                     
█████████  ██████████ ██████   █████ ██████████ ███████████     █████████   ███████████    ███████    ███████████  
███░░░░░███░░███░░░░░█░░██████ ░░███ ░░███░░░░░█░░███░░░░░███   ███░░░░░███ ░█░░░███░░░█  ███░░░░░███ ░░███░░░░░███ 
███     ░░░  ░███  █ ░  ░███░███ ░███  ░███  █ ░  ░███    ░███  ░███    ░███ ░   ░███  ░  ███     ░░███ ░███    ░███ 
░███          ░██████    ░███░░███░███  ░██████    ░██████████   ░███████████     ░███    ░███      ░███ ░██████████  
░███    █████ ░███░░█    ░███ ░░██████  ░███░░█    ░███░░░░░███  ░███░░░░░███     ░███    ░███      ░███ ░███░░░░░███ 
░░███  ░░███  ░███ ░   █ ░███  ░░█████  ░███ ░   █ ░███    ░███  ░███    ░███     ░███    ░░███     ███  ░███    ░███ 
░░█████████  ██████████ █████  ░░█████ ██████████ █████   █████ █████   █████    █████    ░░░███████░   █████   █████
  ░░░░░░░░░  ░░░░░░░░░░ ░░░░░    ░░░░░ ░░░░░░░░░░ ░░░░░   ░░░░░ ░░░░░   ░░░░░    ░░░░░       ░░░░░░░    ░░░░░   ░░░░░

`;
export default Home;
