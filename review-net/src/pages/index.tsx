import Head from 'next/head'
import Dashboard from 'components/Dashboard'
import Card from 'components/Card'


export default function Home() {
  return (
    <>
      <Head>
        <title>Review Net</title>
        <meta name="description" content="its Review Net" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
        <div className=" flex-1 overflow-y-auto">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </main>
    </>
  )
}
