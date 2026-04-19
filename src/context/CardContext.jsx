import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CardContext = createContext();
const CardProvider = ({ children }) => {
  const [calls, setCalls] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

//call button handler
  const handleCall = (currentCard) => {
    console.log("call");
    const isExistCard = calls.find((card) => card.id === currentCard.id);
    if (isExistCard) {
      toast.error("The Call is already in progress");
    } else {
      setCalls([...calls, currentCard]);
      toast.success(`${currentCard.name} is on a call`);
    }
    //console.log(currentCard, calls, "card");
  };

//text button handler
    const handleText = (currentText) => {
    console.log("text");
    const isExistCard = text.find((card) => card.id === currentText.id);
    if (isExistCard) {
      toast.error("The Call is already in progress");
    } else {
      setText([...text, currentText]);
      toast.success(`${currentText.name} is on a Text`);
    }
    //console.log(currentText, text, "text");
  };

   const handleVideo = (currentVideo) => {
    console.log("video");
    const isExistCard = video.find((card) => card.id === currentVideo.id);
    if (isExistCard) {
      toast.error("The Call is already in progress");
    } else {
      setVideo([...video, currentVideo]);
      toast.success(`${currentVideo.name} is on a Video`);
    }
    //console.log(currentVideo, video, "video");
  };

  const data = {
    calls,
    setCalls,
    handleCall,
    text,
    setText,
    handleText,
    video,
    setVideo,
    handleVideo
  };
  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;
};

export default CardProvider;
