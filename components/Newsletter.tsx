import * as React from 'react';
import news from '../newsletter/newsletter.png';
import Image from 'next/image'
import { NewsLetterContainer } from '../styles/muiStyles';

export default function Newsletter() {

  return (<NewsLetterContainer><Image alt="BBL News" src={news} layout="responsive" width={'400px'} height={'800px'} /></NewsLetterContainer>);
}