import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

// 这里可以做个循环，根据routerMap的配置，动态输入对应的Route里需要的属性和页面对应的组件数据
export function RouterPage({ HomePage, ArticlePage, AtticleDetail }) {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={HomePage}></Route>
                <Route path="/article" component={ArticlePage}>
                    <Route path="/:id" component={AtticleDetail}></Route>
                </Route>
            </Switch>
        </Router>
    );
}