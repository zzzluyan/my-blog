## 20201201

- 问题

  1、为什么在动画效果里【visibility: visible】无法让原先【visibility: hidden;】的元素显示出来？

  2、动画对于元素的变化是哪种层面的？

  3、关于background https://developer.mozilla.org/zh-CN/docs/Web/CSS/background

  ```css
  background: url() center 100% center
  ```

  和

  ```css
      background-image: url()
  		background-size: 100% !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
  }
  ```

  不一样？主要体现在background-size 上

  

- 踩坑

  1、react动态写入style样式的时候，内部是做字符串拼接，比如

  ```	javascript
  <div style={{background: "url("+bgImg+")"}} className="article-card-bg"></div>
  ```

  2、做背景虚化和内容实体化，需要把背景单拎出来独立为一个元素，内容相对于容器绝对定位

  ```html
  <div className="article-card-container" >
      <div style={{background: "url("+bgImg+")"}} className="article-card-bg"></div>
      <div className="card-desc">
         内容x x x x
      </div>
  </div>
  
  <style>
  .article-card-container {
      height: 300px;
      width: 100%;
      position: relative;
  }
  .article-card-bg {
      width: 100%;
      height: 100%;
      background-size: 100% !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
    	filter: blur(5px);
  }
  ..card-desc {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
  }
  </style>
  ```

  



## 20201130

- 踩坑
- Question


## 20201129

- #### 踩坑

  1、每个function 传入的参数必须用{} 包裹，eg:

  ```javascript
  function test({ name, age }) {}
  ```
  因为，这个是props的展开项，传入的其实是props，而props是个对象

  2、class => className

- #### Question

  1、如何去除<a>标签的默认样式
  
  这种方式好麻烦
  
    ```CSS
    a:hover, a:visited, a:link, a:active {
        color: #333;
    }
    ```
    为什么outline: 0; 不能用？？？