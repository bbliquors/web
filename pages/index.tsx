import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import {StyledContainer} from '../styles/muiStyles'
import Navigation from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <div style={{backgroundColor: "#64b3b0", height: '100%'}}>
      <Head>
        <title>Banana Belt Liquors</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/banana.png" />
      </Head>

    <StyledContainer disableGutters maxWidth="lg">
      <Navigation/>
      <Image src={'/splash.png'} layout="responsive" width={'3343px'} height={'3430px'}/>
    </StyledContainer>
         

   
    </div>
  )
}

export default Home
