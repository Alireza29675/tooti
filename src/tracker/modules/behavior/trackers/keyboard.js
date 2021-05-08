
export default function (reportEvent) {    
  document.addEventListener('keydown', ({ key }) => {
    reportEvent({ key })
  })
}
