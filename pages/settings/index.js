import Link from "next/link"

export async function getStaticProps({ locale }){
    const languageData = (await import(`../../lang/${locale}.js`)).default
    return {
      props: {languageData},
    }
  }

export default function Settings({  languageData }){
    return(
        <>
            <h1>{languageData.pageSettingsTitle}</h1>
            <Link href="/">Back to home</Link>
        </>
    )
}