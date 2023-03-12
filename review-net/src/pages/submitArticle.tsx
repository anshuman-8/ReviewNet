import ArticleForm from 'components/articleForm'
import React from 'react'

export default function SubmitArticle() {
  return (
    <div>
      <div className='my-5 text-2xl font-medium mx-2'>
        Submit Article
      </div>
      <ArticleForm/>
    </div>
  )
}
