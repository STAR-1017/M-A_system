;(function() {
  const Widget = Object.create({
    create(serviceName) {
      const wdg = document.createElement('div')
      wdg.setAttribute('id', 'widget_help_btn')
      wdg.style = 'position: fixed; z-index: 11; bottom: 15px; right: 15px;'
      wdg.innerHTML = `<a href="${serviceLink()}" target="_blank" rel="noopener" id="rakko_help_widget_link"
        ><img alt="クエスチョンマーク" src="https://rakkoid.com/img/question_icon.png" id="rakko_help_widget_img" width="8px" height="12px">
        </a><span id="help_balloon"></span>`

      // リンク先分岐
      function serviceLink() {
        let serviceLinkText = ''
        if (serviceName === 'rakko-id') {
          serviceLinkText = 'https://rakkoid.com/knowledge/'
        } else if (serviceName === 'rakko-domain') {
          serviceLinkText = 'https://rakkodomain.com/knowledge/'
        } else if (serviceName === 'rakko-ma') {
          serviceLinkText = 'https://rakkoma.com/knowledge/'
        } else if (serviceName === 'rakko-keyword') {
          serviceLinkText = 'https://related-keywords.com/knowledge/'
        } else if (serviceName === 'rakko-old-domain') {
          serviceLinkText = 'https://knowledge.topshelfequestrian.com'
        } else if (serviceName === 'rakko-server') {
          serviceLinkText = 'https://rakkoserver.com/knowledge/'
        } else {
          serviceLinkText = '/'
        }

        return serviceLinkText
      }
      window.addEventListener('DOMContentLoaded', serviceLink)

      // メディアクエリ設定
      let flag = ''
      function windowSize() {
        let w = window.innerWidth
        const head = document.getElementsByTagName('head').item(0)
        const style = document.createElement('style')
        head.appendChild(style)
        style.media = 'screen'
        style.type = 'text/css'

        if (
          // 〜767pxまでのstyle設定
          w <= 767 &&
          flag != 'sp' &&
          window.matchMedia('screen and (max-width:767px)').matches
        ) {
          flag = 'sp'
          const styleTags =
            '#rakko_help_widget_link{width: 35px; height: 35px; background-color: rgba(64,64,64,0.8); border-radius: 50%; box-shadow: 0 5px 10px 3px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; padding: 5px; border: 1px solid rgba(255,255,255,0.8); cursor: pointer; box-sizing: border-box; line-height: 1; color: #666;} ' +
            '#rakko_help_widget_img {height: 16px; width: 11px;}' +
            '#rakko_help_widget_link:hover{opacity: 1; background-color: rgba(64,64,64,0.8);}' +
            '#help_balloon{display: none; top: 3px;}'
          const widgetStyle = document.createTextNode(styleTags)
          style.appendChild(widgetStyle)
        } else if (
          // 768px〜のstyle設定
          w > 767 &&
          flag != 'pc' &&
          window.matchMedia('screen and (min-width:768px)').matches
        ) {
          flag = 'pc'
          const styleTags =
            '#rakko_help_widget_link{width: 28px; height: 28px; background-color: rgba(64,64,64,0.8); border-radius: 50%; box-shadow: 0 5px 10px 3px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; padding: 5px; border: 1px solid rgba(255,255,255,0.8); cursor: pointer; box-sizing: border-box; line-height: 1; color: #666;} ' +
            '#rakko_help_widget_img {height: 12px; width: 8px;}' +
            '#rakko_help_widget_link:hover{opacity: 1; background-color: rgba(64,64,64,0.8);}' +
            '#rakko_help_widget_link:hover + #help_balloon {display: inline;}' +
            '#help_balloon {position : absolute; display: none; background-color: rgba(85,85,85,0.9); left: -170px; top: 0px; padding: 7px; border-radius: 3px;}' +
            '#help_balloon:before {content:"ヘルプ・お問い合わせ"; font-size: 14px; color: #fff;}' +
            '#help_balloon:after {content: ""; position: absolute; top: 50%; right: -12px; margin-top: -6px; border: 6px solid transparent; border-left: 6px solid rgba(85,85,85,0.9);}'
          const widgetStyle = document.createTextNode(styleTags)
          style.appendChild(widgetStyle)
        }
      }
      window.addEventListener('DOMContentLoaded', windowSize)
      window.addEventListener('resize', windowSize)

      return wdg
    }
  })
  const src = new URL(document.getElementById('rakkoid-help').src)
  const serviceName = src.searchParams.get('service_name')
  const id = 'rakko_help_widget'
  const style = 'margin: 0; padding:0;'
  document.write(`<div id="${id}" style="${style}"></div>`)
  const widgetInstance = Widget.create(serviceName)
  document.getElementById(id).appendChild(widgetInstance)
})()
