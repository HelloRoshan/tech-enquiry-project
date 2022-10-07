import {Html, Head, Main, NextScript} from 'next/document';

export default function Document(){
    return(
        <Html>
            <Head>
                <body>
                    <div  style={{ backgroundImage: `url(./img/HomeBackground.jpg)`, backgroundSize:"cover", backgroundRepeat:"no-repeat",  minHeight:"100vh", flex:1, backgroundPosition: "center"}}>
                        <Main/>
                        <NextScript/>
                    </div>
                </body>
            </Head>
        </Html>
    )
}