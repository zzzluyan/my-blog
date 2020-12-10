## 20201210

- 踩坑

  1、关于list数组使用map渲染组件

  ```react
  export function RouterPage() {
      return (
          <Router>
              <Switch>
                  {
                      routers.map((item) => {
                          return ( // map 如果使用{} 包裹函数返回的内容，一定要用return!
                              <Route path={item.path} component={item.component} key={item.name}>
                              </Route>
                          )
                      })
                  }
              </Switch>
          </Router>
      );
  }
  ```
  
- 问题

  1、全局react的设置问题？？？为什么在我用run eject 把webpack的配置弹出来以后，全局react就失效了？？然后手动配置还不生效

  <font color="coral">配置生效了，要写在顶层的plugins里</font>

  2、使用useHistory

  为什么
  
  ```react
  import { useHistory } from 'react-router-dom';
  export function ArticleCard({ title, date, ContentCom, bgImg, contentId }) {
      let history = useHistory(); //为什么一定要放置组件顶层
      const toArticleDetail = (id) => {
          history.push(`./article/${id}`)
      }
      // 这样就不行 ？？ 就会报错
      //const toArticleDetail = (id) => {
      //    useHistory().push(`./article/${id}`)
      //}
    // ....
  }
  ```
  
  https://reactjs.org/docs/hooks-rules.html#explanation
  
  <font color="coral">官网里说明，hooks的调用顺序很重要，所以必须放在，条件 / 循环 / 函数 外层，因为react内部要分析联系前后两次组件render时hooks的调用返回，如果没有把hooks放在顶层，那么hooks调用顺序将会改变，整个调用栈顺序发生改变从而导致错误</font>

## 20201206

- 踩坑

  1、react-router相关的用法还是去https://reactrouter.com/web/api/Route/route-props这里看比较好

  中文网版本没跟上

  踩的第一个坑就是报错 TypeError: Cannot read property 'location' of undefined

  原因就是4.0以上的版本，api大概，正确用法在英文官网上

  2、react-router里用的是history模式，路径访问直接 域名/路径 即可，中间不需要#

## 20201205

- 踩坑

  1、react function 中传入的props属性里，只有大写属性，会被当作组件去使用渲染

  ```javascript
  // 无效
  function test({ content }) {
    return <content />
  }
  
  // 有效
  function test({ Content }) {
    return <Content />
  }
  ```

  2、react中使用 lazy 函数一定要包裹一层函数 使用importMDX踩的坑

  ```javascript
  // 无效
  const text = lazy(func());
  
  // 有效
  const text = lazy(() => func());
  ```

  3、lazy 函数内要渲染的部分，一定要使用Suspense包裹，且必须携带fallback属性

  ```react
  function card({ Content }) {
    return (
      <Suspense fallback={<div>loading..</div>}>
          <ContentCom />
      </Suspense>
    )
  }
  ```

  

  

## 20201202

- 踩坑

  1、如何让占位元素不显示，但是hover操作的时候配合动画出现

  ```scss
  .target-ele {
    opacity: 0;
  }
  .target-ele:hover {
    opacity: 1;
  }
  ```

  2、突然发现filter 属性可以做整个网站元素蒙层

  兼容性除了IE，其他浏览器貌似都ok

  https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter

  ```css
  * {
    filter: grayscale(80%);
  }
  ```

  

## 20201201

- 问题

  1、为什么在动画效果里【visibility: visible】无法让原先【visibility: hidden;】的元素显示出来？

  <font color="coral">因为【visibility: hidden】的元素本身不可点击，所以hover操作中添加动画，添加【visibility: visible】都是无法响应的</font>

  ~~2、动画对于元素的变化是哪种层面的？~~

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