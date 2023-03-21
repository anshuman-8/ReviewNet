import { useEffect, useState } from "react";
import Head from "next/head";
import CardDummy from "components/CardDummy";
import Card from "components/Card";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const baseURL = 'http://127.0.0.1:8000/api/'
  // const baseURL = 'https://anshuman.pythonanywhere.com/api/';
  const url = baseURL+"articles/";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      }
      )
      .catch((err) => console.log(err));


  },[]);
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
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin my-5 h-7 w-7 mx-10" />
          ) : (
            articles.map((article, i) => {
              return (
                <Card
                  key={i}
                  title={article.title}
                  abstract={article.content}
                  link={article.articleUrl}
                  slug={article.slug}
                />
              );
            })
          )}
          {/* <CardDummy />
          <CardDummy />
          <CardDummy />
          <CardDummy />
          <CardDummy />
          <CardDummy />
          <CardDummy /> */}
        </div>
      </main>
    </>
  );
}
