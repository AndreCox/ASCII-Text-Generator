import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import {Button} from "../Components/index.js";
import figlet from "../../_snowpack/pkg/figlet.js";
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
    className: " text-green-400  text-center font-[Monospace] whitespace-pre text-[10px] overflow-clip"
  }, banner), /* @__PURE__ */ React.createElement("div", {
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
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-white"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "p-4 border border-green-400 overflow-x-scroll empty:hidden rounded-lg w-full float-left font-[Monospace] whitespace-pre text-[10px] text-green-400"
  }, outputText)), /* @__PURE__ */ React.createElement("select", {
    className: "outline-none text-green-400 p-1 rounded-lg bg-[rgb(10,10,10)] border border-green-400",
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
    className: "text-green-400 border border-green-400 focus:bg-green-400"
  }, font2))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => {
      navigator.clipboard.writeText(outputText);
    },
    className: "text-green-400 rounded-lg bg-black border border-green-400"
  }, "Copy to Clipboard"))));
}
const banner = `
█████████    █████████    █████████  █████ █████    ███████████ ██████████ █████ █████ ███████████      █████████  ██████████ ██████   █████ ██████████ ███████████     █████████   ███████████    ███████    ███████████  
███░░░░░███  ███░░░░░███  ███░░░░░███░░███ ░░███    ░█░░░███░░░█░░███░░░░░█░░███ ░░███ ░█░░░███░░░█     ███░░░░░███░░███░░░░░█░░██████ ░░███ ░░███░░░░░█░░███░░░░░███   ███░░░░░███ ░█░░░███░░░█  ███░░░░░███ ░░███░░░░░███ 
░███    ░███ ░███    ░░░  ███     ░░░  ░███  ░███    ░   ░███  ░  ░███  █ ░  ░░███ ███  ░   ░███  ░     ███     ░░░  ░███  █ ░  ░███░███ ░███  ░███  █ ░  ░███    ░███  ░███    ░███ ░   ░███  ░  ███     ░░███ ░███    ░███ 
░███████████ ░░█████████ ░███          ░███  ░███        ░███     ░██████     ░░█████       ░███       ░███          ░██████    ░███░░███░███  ░██████    ░██████████   ░███████████     ░███    ░███      ░███ ░██████████  
░███░░░░░███  ░░░░░░░░███░███          ░███  ░███        ░███     ░███░░█      ███░███      ░███       ░███    █████ ░███░░█    ░███ ░░██████  ░███░░█    ░███░░░░░███  ░███░░░░░███     ░███    ░███      ░███ ░███░░░░░███ 
░███    ░███  ███    ░███░░███     ███ ░███  ░███        ░███     ░███ ░   █  ███ ░░███     ░███       ░░███  ░░███  ░███ ░   █ ░███  ░░█████  ░███ ░   █ ░███    ░███  ░███    ░███     ░███    ░░███     ███  ░███    ░███ 
█████   █████░░█████████  ░░█████████  █████ █████       █████    ██████████ █████ █████    █████       ░░█████████  ██████████ █████  ░░█████ ██████████ █████   █████ █████   █████    █████    ░░░███████░   █████   █████
░░░░░   ░░░░░  ░░░░░░░░░    ░░░░░░░░░  ░░░░░ ░░░░░       ░░░░░    ░░░░░░░░░░ ░░░░░ ░░░░░    ░░░░░         ░░░░░░░░░  ░░░░░░░░░░ ░░░░░    ░░░░░ ░░░░░░░░░░ ░░░░░   ░░░░░ ░░░░░   ░░░░░    ░░░░░       ░░░░░░░    ░░░░░   ░░░░░ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
`;
export default Home;
