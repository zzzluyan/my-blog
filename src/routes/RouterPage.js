import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { routers } from "../routes/routerMap";
import HomePage from '../components/HomePage';

// 这里可以做个循环，根据routerMap的配置，动态输入对应的Route里需要的属性和页面对应的组件数据
export function RouterPage() {
    return (
        <Router>
            <div>123</div>
            <Switch>
                {
                    routers.map((item) => {
                        console.log(item);
                        (
                            <React.Fragment>
                                <Route path={item.path} component={item.component} key={item.name}>
                                    {
                                        item.children &&
                                        item.children.map(
                                            (child) => <Route path={child.path} component={child.component} key={child.name}></Route>
                                        )
                                    }
                                </Route>
                            </React.Fragment>
                        )
                    })
                }
                {/* <Route path="/home" component={HomePage}></Route> */}
                {/* <Route path="/article" component={ArticlePage}>
                    <Route path="/:id" component={ArticleDetail}></Route>
                </Route> */}
            </Switch>
        </Router>
    );
}