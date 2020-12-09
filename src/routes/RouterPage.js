import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { routers } from "../routes/routerMap";

// 这里可以做个循环，根据routerMap的配置，动态输入对应的Route里需要的属性和页面对应的组件数据
export function RouterPage() {
    return (
        <Router>
            <Switch>
                {
                    routers.map((item) => {
                    (
                        <Route path={item.path} component={item.component}>
                            { 
                                item.children &&
                                item.children.map(
                                    (child) => <Route path={child.path} component={child.component}></Route>
                                )
                            }
                        </Route>
                    )
                    })
                }
                {/* <Route path="/home" component={HomePage}></Route>
                <Route path="/article" component={ArticlePage}>
                    <Route path="/:id" component={ArticleDetail}></Route>
                </Route> */}
            </Switch>
        </Router>
    );
}