
export const viewImage = (Vue) => {
  Vue.directive('view-image', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      el.style.cursor = 'pointer'
      el.title = '点击可查看大图'

      // 图片
      let img = document.createElement('img')
      // 图片外壳
      let imgBox = document.createElement('div')
      // 这个查看图片包含框
      let div = document.createElement('div')
      let closeBox = document.createElement('span')
      // 查看大图的关闭按钮
      closeBox.innerText = '×'
      closeBox.className = 'close'

      div.className = 'view-image-container'
      imgBox.appendChild(img)
      imgBox.appendChild(closeBox)
      div.appendChild(imgBox)
      div.style.visibility = 'hidden'

      document.body.appendChild(div)

      el.addEventListener('click', function () {
        img.src = el.src
        div.style.visibility = 'visible'
      })

      // 点击关闭按钮隐藏查看大图
      closeBox.addEventListener('click', function () {
        div.style.visibility = 'hidden'
      })
    }
  })
}
