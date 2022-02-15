import { useEffect, useRef } from 'react';

function TitleScroller({ text: fullText }) {

  const intervalHandle = useRef()
  const pageTitle = useRef()
  useEffect(() => {

    window.addEventListener('blur', () => {
      pageTitle.current = document.title
      let text = fullText

      intervalHandle.current = setInterval(() => {
        document.title = text

        text = text.substring(3) || fullText
      }, 500)
    })


    window.addEventListener('focus', () => {
      clearInterval(intervalHandle.current)

      document.title = pageTitle.current
    })
  }, [fullText])

  return null
}


export default TitleScroller