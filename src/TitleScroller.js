import { useEffect, useRef } from 'react';

function TitleScroller({ text: fullText }) {

  const intervalHandle = useRef()
  const pageTitle = useRef(document.title)
  useEffect(() => {

    window.addEventListener('blur', () => {
      let text = fullText

      intervalHandle.current = setInterval(() => {
        document.title = text
        if (/^\S{0,3} +$/.test(text)) {
          // there is no more any visible text
          text = fullText;
        } else {
          // Use U+00A0 instead of normal space due to Safari ignoring the trailing spaces
          text = text.substring(3) + ' '.repeat(3)
        }
        document.title = text
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