console.log(
    // %cbuild from PakePlus： https://github.com/',
    // color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    // console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        // console.log('handle origin', origin)
        location.href = origin.href
    } else {
        // console.log('not handle origin', origin)
    }
}

document.addEventListener('click', hookClick, { capture: true })

const dy = (e) => {
  var url;
  url = window.location.href;
  if (url.includes("login")) {
   var t_Nd = document.evaluate(".//*[contains(text(), '学习系统')]", document.body, null, XPathResult.ANY_TYPE, null ).iterateNext();
   if (t_Nd){
     t_Nd.innerHTML='智适应学习系统';
     t_Nd.setAttribute('style', 'color: #f28f1b;font-size: 35px;text-align: center;letter-spacing: 0.53571rem;');
   }
  }
  
  const currentDate = new Date();
  const targetDate = new Date(2026, 7, 1); 
  if (currentDate > targetDate) {
    document.documentElement.style.visibility = 'hidden';
    // document.documentElement.style.display = 'none';
  }
}
document.addEventListener('readystatechange', dy, { capture: true })
document.addEventListener('DOMContentLoaded', dy, { capture: true })
