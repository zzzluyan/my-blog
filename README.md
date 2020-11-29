## 20201129

- #### 踩坑

  1、每个function 传入的参数必须用{} 包裹，eg:

  ```javascript
  function test({ name, age }) {}
  ```
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