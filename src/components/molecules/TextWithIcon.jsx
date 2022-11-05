import styled from "styled-components";

import { Text } from "../atoms/text/TextHeader";

export const TextWithIcon = ({icon, children, primary, onClick, clickable}) => {
  return (
    <Texts primary={primary} onClick={onClick} clickable={clickable}>
      {
        icon==='time'?<TimeIcon />:<DownloadIcon />
      }
      {children}
    </Texts>
  );
};

const Texts = styled(Text)`
  display: flex;
  gap:10px;
  align-items: center;
`

const TimeIcon = ()=>{
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.2498 12.0005C21.2498 17.1095 17.1088 21.2505 11.9998 21.2505C6.8908 21.2505 2.7498 17.1095 2.7498 12.0005C2.7498 6.8915 6.8908 2.7505 11.9998 2.7505C17.1088 2.7505 21.2498 6.8915 21.2498 12.0005Z" stroke="#252A3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.4314 14.9429L11.6614 12.6939V7.84691" stroke="#252A3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}


const DownloadIcon = ()=>{
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.1222 15.4361L12.1222 3.3951" stroke="#252A3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.0382 12.5084L12.1222 15.4364L9.20621 12.5084" stroke="#252A3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.755 8.12801H17.688C19.723 8.12801 21.372 9.77701 21.372 11.813V16.697C21.372 18.727 19.727 20.372 17.697 20.372L6.55701 20.372C4.52201 20.372 2.87201 18.722 2.87201 16.687V11.802C2.87201 9.77301 4.51801 8.12801 6.54701 8.12801L7.48901 8.12801" stroke="#252A3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>


  )
}